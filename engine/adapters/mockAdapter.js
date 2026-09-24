import sharp from 'sharp';

export class MockAdapter {
  constructor(config) {
    this.config = config;
  }

  async generate({ imageBuffer, prompt, presetId }) {
    console.log(`[MockAdapter] Simulating AI generation for preset '${presetId}'...`);
    
    // Simulate short network/AI latency (1.0s)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple visual filter: apply color tint/effect based on preset
    let pipeline = sharp(imageBuffer).resize(1024, 1024, { fit: 'cover' });

    if (presetId === 'theos2_orbit') {
      pipeline = pipeline.modulate({ hue: 195, saturation: 1.4, brightness: 1.05 });
    } else if (presetId === 'cyber_space' || presetId === 'cyberpunk') {
      pipeline = pipeline.modulate({ hue: 200, saturation: 1.8, brightness: 1.05 });
    } else if (presetId === 'tsx_gala_night' || presetId === 'hollywood_glam') {
      pipeline = pipeline.modulate({ hue: 35, saturation: 1.3, brightness: 1.1 });
    } else if (presetId === 'skp_systems_lead' || presetId === 'retro_vintage') {
      pipeline = pipeline.modulate({ saturation: 0.9, brightness: 1.05 });
    } else if (presetId === 'anime_cosmic' || presetId === 'anime_hero') {
      pipeline = pipeline.modulate({ saturation: 1.6, brightness: 1.15 });
    } else if (presetId === 'royal_gold') {
      pipeline = pipeline.modulate({ hue: 45, saturation: 1.5, brightness: 1.05 });
    }

    const outputBuffer = await pipeline.jpeg({ quality: 92 }).toBuffer();
    return {
      buffer: outputBuffer,
      cdnUrl: null,
    };
  }
}
