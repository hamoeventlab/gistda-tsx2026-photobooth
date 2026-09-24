import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';
import sharp from 'sharp';
import { EngineManager } from './engine/engineManager.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load configuration
const configPath = path.join(__dirname, 'config.json');
let config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Initialize Engine Manager
const engineManager = new EngineManager(config);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Ensure output directories exist locally (if supported)
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;
const outputsDir = path.join(__dirname, 'public', 'outputs');

if (!isVercel) {
  try {
    if (!fs.existsSync(outputsDir)) {
      fs.mkdirSync(outputsDir, { recursive: true });
    }
  } catch (err) {
    console.warn('[Server] Skipping local output dir creation on read-only filesystem.');
  }
}

// Stage SSE broadcast state
const stageClients = new Set();
const stageHistory = [];

function broadcastToStage(photoEvent) {
  const payload = `data: ${JSON.stringify(photoEvent)}\n\n`;
  for (const client of stageClients) {
    try {
      client.write(payload);
    } catch (err) {
      console.warn('[Stage] Error writing to client, removing:', err.message);
      stageClients.delete(client);
    }
  }
}

// Route: Serve Stage Display page
app.get('/stage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'stage.html'));
});

// Endpoint: Server-Sent Events (SSE) for Stage Displays
app.get('/api/stage/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  // Send initial connection ping
  res.write(`data: ${JSON.stringify({ type: 'connected', timestamp: Date.now() })}\n\n`);

  stageClients.add(res);
  console.log(`[Stage] Screen connected. Active screens: ${stageClients.size}`);

  req.on('close', () => {
    stageClients.delete(res);
    console.log(`[Stage] Screen disconnected. Active screens: ${stageClients.size}`);
  });
});

// Endpoint: Get Stage Recent History
app.get('/api/stage/history', (req, res) => {
  res.json({
    headline: config.stage_display?.headline || 'LIVE CELEBRATION WALL',
    subheadline: config.stage_display?.subheadline || 'Real-time AI Portrait Showcase',
    slide_interval: config.stage_display?.slide_interval_seconds || 8,
    photos: stageHistory.slice(-20),
  });
});

// Endpoint: Publish photo to Stage Screen
app.post('/api/stage/publish', (req, res) => {
  try {
    const { imageUrl, guestName, theme, downloadUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: 'Missing imageUrl.' });
    }

    const item = {
      id: `stage_${Date.now()}`,
      imageUrl,
      guestName: guestName || 'VIP Guest',
      theme: theme || 'Studio Portrait',
      downloadUrl: downloadUrl || imageUrl,
      timestamp: Date.now(),
    };

    stageHistory.push(item);
    if (stageHistory.length > 50) stageHistory.shift();

    broadcastToStage({ type: 'new_photo', photo: item });
    res.json({ success: true, photo: item });
  } catch (err) {
    console.error('[Stage Publish Error]:', err);
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: Get event configuration, presets, costumes, frames & stickers
app.get('/api/config', (req, res) => {
  res.json({
    event_name: config.event_name,
    active_engine: engineManager.getActiveEngineName(),
    countdown_seconds: config.countdown_seconds,
    result_display_seconds: config.result_display_seconds,
    theme_lock_enabled: !!config.theme_lock_enabled,
    locked_preset_id: config.locked_preset_id || 'cyberpunk',
    print_enabled: !!config.print_enabled,
    presets: config.presets,
    costume_templates: config.costume_templates || [],
    frame_templates: config.frame_templates || [],
    stickers: config.stickers || [],
    stage_display: config.stage_display || {},
  });
});

// Endpoint: Print photo job (Hook for local printer spooler)
app.post('/api/print', async (req, res) => {
  try {
    const { imageUrl, format = '4x6' } = req.body;
    console.log(`[Print Spooler] Print job received for photo: ${imageUrl} (${format})`);
    res.json({ success: true, message: `Print job (${format}) queued to local dye-sub printer.` });
  } catch (error) {
    console.error('Print Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Composite Print Layout (Combines base photo, frames, stickers & drawings)
app.post('/api/compose-print', async (req, res) => {
  try {
    const { compositeDataUrl, format = '1:1' } = req.body;
    if (!compositeDataUrl) {
      return res.status(400).json({ error: 'No composite image data provided.' });
    }

    const base64Data = compositeDataUrl.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const timestamp = Date.now();
    const filename = `print_${format.replace(':', 'x')}_${timestamp}.jpg`;
    let publicUrl = '';

    if (!isVercel) {
      const outputPath = path.join(outputsDir, filename);
      fs.writeFileSync(outputPath, buffer);
      publicUrl = `/outputs/${filename}`;
    } else {
      publicUrl = compositeDataUrl;
    }

    // Auto publish to stage
    const stageItem = {
      id: `photo_${timestamp}`,
      imageUrl: publicUrl,
      guestName: 'Guest Memory',
      theme: `Photo (${format})`,
      timestamp,
    };
    stageHistory.push(stageItem);
    if (stageHistory.length > 50) stageHistory.shift();
    broadcastToStage({ type: 'new_photo', photo: stageItem });

    res.json({
      success: true,
      imageUrl: publicUrl,
      downloadUrl: publicUrl.startsWith('http') ? publicUrl : `${req.protocol}://${req.get('host')}${publicUrl}`,
    });
  } catch (error) {
    console.error('[Composite Print Error]:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint: Generate AI Photo / Face Swap
app.post('/api/generate', async (req, res) => {
  try {
    const { image, presetId, costumeId, isCostume, customPrompt } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No camera photo provided.' });
    }

    // Decode base64 image
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');

    let rawBuffer = null;
    let cdnUrl = null;
    let chosenThemeName = '';

    if (isCostume || costumeId) {
      // Fixed costume / template face swap mode
      const costume = (config.costume_templates || []).find((c) => c.id === costumeId) || config.costume_templates?.[0];
      chosenThemeName = costume?.name || 'Costume Template';
      console.log(`[Server] Generating fixed costume portrait: ${chosenThemeName}`);

      const result = await engineManager.generate({
        imageBuffer,
        costumeId: costume?.id || 'astronaut',
        templateImgPath: costume?.template_img || '/assets/costumes/astronaut.jpg',
        isCostume: true,
      });
      rawBuffer = result.buffer;
      cdnUrl = result.cdnUrl;
    } else {
      // Generative prompt mode
      const preset = config.presets.find((p) => p.id === presetId) || config.presets[0];
      chosenThemeName = preset?.name || 'AI Style';
      const finalPrompt = customPrompt || preset.prompt;

      console.log(`[Server] Generating generative AI portrait: ${chosenThemeName}`);
      const result = await engineManager.generate({
        imageBuffer,
        prompt: finalPrompt,
        presetId: preset.id,
      });
      rawBuffer = result.buffer;
      cdnUrl = result.cdnUrl;
    }

    // Resize and format output via Sharp
    let processedBuffer = rawBuffer;
    if (rawBuffer) {
      try {
        processedBuffer = await sharp(rawBuffer)
          .resize(config.output_resolution.width, config.output_resolution.height, { fit: 'cover' })
          .jpeg({ quality: 92 })
          .toBuffer();
      } catch (sharpErr) {
        console.warn('[Server] Sharp processing warning (using rawBuffer):', sharpErr.message);
        processedBuffer = rawBuffer;
      }
    }

    let publicPhotoUrl = '';
    let fullDownloadUrl = '';
    let isBase64Result = false;

    const timestamp = Date.now();
    const filename = `photo_${timestamp}.jpg`;

    if (!isVercel) {
      const outputPath = path.join(outputsDir, filename);
      fs.writeFileSync(outputPath, processedBuffer);
      publicPhotoUrl = `/outputs/${filename}`;
      fullDownloadUrl = `${req.protocol}://${req.get('host')}${publicPhotoUrl}`;
    } else {
      if (cdnUrl) {
        publicPhotoUrl = cdnUrl;
        fullDownloadUrl = cdnUrl;
      } else {
        isBase64Result = true;
        publicPhotoUrl = `data:image/jpeg;base64,${processedBuffer.toString('base64')}`;
        fullDownloadUrl = publicPhotoUrl;
      }
    }

    // Generate QR Code safely
    let qrDataUrl = '';
    try {
      let qrTargetUrl = fullDownloadUrl;
      if (isBase64Result || !qrTargetUrl || qrTargetUrl.startsWith('data:')) {
        qrTargetUrl = `${req.protocol}://${req.get('host')}/?demo=${timestamp}`;
      }

      qrDataUrl = await QRCode.toDataURL(qrTargetUrl, {
        width: 256,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
    } catch (qrErr) {
      console.warn('[Server] QR Code Generation warning:', qrErr.message);
    }

    // Add to stage broadcast history
    const stageItem = {
      id: `photo_${timestamp}`,
      imageUrl: publicPhotoUrl,
      guestName: 'Guest Memory',
      theme: chosenThemeName,
      downloadUrl: fullDownloadUrl,
      timestamp,
    };
    stageHistory.push(stageItem);
    if (stageHistory.length > 50) stageHistory.shift();
    broadcastToStage({ type: 'new_photo', photo: stageItem });

    res.json({
      success: true,
      imageUrl: publicPhotoUrl,
      qrUrl: qrDataUrl,
      downloadUrl: fullDownloadUrl,
      isBase64: isBase64Result,
      themeName: chosenThemeName,
    });
  } catch (error) {
    console.error('Generation Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

if (!isVercel) {
  app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`⚡ HAMO AI Photo Booth & Studio Server Running`);
    console.log(`📍 Kiosk Kiosk:  http://localhost:${PORT}`);
    console.log(`📺 Stage Screen: http://localhost:${PORT}/stage`);
    console.log(`⚙️ Active Engine: [${engineManager.getActiveEngineName()}]`);
    console.log(`================================================`);
  });
}

export default app;
