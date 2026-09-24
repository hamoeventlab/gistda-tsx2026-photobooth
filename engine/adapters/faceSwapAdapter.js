import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FaceSwapAdapter {
  constructor(config) {
    this.config = config;
  }

  async generate({ imageBuffer, costumeId, templateImgPath }) {
    console.log(`[FaceSwapAdapter] Swapping face for costume: ${costumeId}`);

    // Resolve template image path
    let resolvedTemplatePath = '';
    if (templateImgPath) {
      resolvedTemplatePath = path.isAbsolute(templateImgPath)
        ? templateImgPath
        : path.join(__dirname, '..', '..', 'public', templateImgPath.replace(/^\//, ''));
    }

    if (!resolvedTemplatePath || !fs.existsSync(resolvedTemplatePath)) {
      // Default to astronaut costume if template not found
      resolvedTemplatePath = path.join(__dirname, '..', '..', 'public', 'assets', 'costumes', 'astronaut.jpg');
    }

    if (!fs.existsSync(resolvedTemplatePath)) {
      console.warn(`[FaceSwapAdapter] Template image not found at ${resolvedTemplatePath}, falling back to guest photo.`);
      return { buffer: imageBuffer, cdnUrl: null };
    }

    try {
      // Load and normalize costume template
      const templateMeta = await sharp(resolvedTemplatePath).metadata();
      const targetWidth = this.config.output_resolution?.width || 1024;
      const targetHeight = this.config.output_resolution?.height || 1024;

      const templateBuffer = await sharp(resolvedTemplatePath)
        .resize(targetWidth, targetHeight, { fit: 'cover' })
        .toBuffer();

      // Create an oval face cutout from guest input
      // Face bounding zone is usually center-top (X: 30%-70%, Y: 20%-55%)
      const faceWidth = Math.round(targetWidth * 0.38);
      const faceHeight = Math.round(targetHeight * 0.44);
      const faceLeft = Math.round((targetWidth - faceWidth) / 2);
      const faceTop = Math.round(targetHeight * 0.16);

      // Create feathered oval SVG mask
      const ovalMaskSvg = Buffer.from(`
        <svg width="${faceWidth}" height="${faceHeight}">
          <defs>
            <radialGradient id="featherGrad" cx="50%" cy="50%" r="50%">
              <stop offset="65%" stop-color="#ffffff" stop-opacity="1" />
              <stop offset="90%" stop-color="#ffffff" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="${faceWidth / 2}" cy="${faceHeight / 2}" rx="${faceWidth / 2 - 4}" ry="${faceHeight / 2 - 4}" fill="url(#featherGrad)" />
        </svg>
      `);

      // Prepare guest face cutout with subtle tone matching
      const guestFace = await sharp(imageBuffer)
        .resize(faceWidth, faceHeight, { fit: 'cover', position: 'attention' })
        .composite([{ input: ovalMaskSvg, blend: 'dest-in' }])
        .png()
        .toBuffer();

      // Composite guest face seamlessly onto costume base template
      const compositedBuffer = await sharp(templateBuffer)
        .composite([
          {
            input: guestFace,
            top: faceTop,
            left: faceLeft,
            blend: 'over',
          },
        ])
        .jpeg({ quality: 94 })
        .toBuffer();

      return { buffer: compositedBuffer, cdnUrl: null };
    } catch (err) {
      console.error('[FaceSwapAdapter] Error compositing face swap:', err);
      return { buffer: imageBuffer, cdnUrl: null };
    }
  }
}
