import Replicate from "replicate";

export class ReplicateAdapter {
  constructor(config) {
    this.config = config;
    if (process.env.REPLICATE_API_TOKEN) {
      this.replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
      });
    }
  }

  async generate({ imageBuffer, prompt, presetId }) {
    if (!this.replicate) {
      throw new Error("REPLICATE_API_TOKEN environment variable is not set.");
    }

    console.log(`[ReplicateAdapter] Submitting task to Replicate...`);

    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

    const output = await this.replicate.run(
      this.config.replicate_model || "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: prompt,
          image: base64Image,
          prompt_strength: 0.7,
        }
      }
    );

    const imageUrl = Array.isArray(output) ? output[0] : output;
    if (!imageUrl) {
      throw new Error("Replicate returned no image URL.");
    }

    console.log(`[ReplicateAdapter] Generation complete: ${imageUrl}`);
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    return {
      buffer: Buffer.from(arrayBuffer),
      cdnUrl: imageUrl,
    };
  }
}
