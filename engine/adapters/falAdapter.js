import * as fal from "@fal-ai/serverless-client";

export class FalAdapter {
  constructor(config) {
    this.config = config;
    if (process.env.FAL_KEY) {
      fal.config({
        credentials: process.env.FAL_KEY,
      });
    }
  }

  async generate({ imageBuffer, prompt, presetId }) {
    if (!process.env.FAL_KEY) {
      throw new Error("FAL_KEY environment variable is not set.");
    }

    const falModel = this.config.fal_model || "fal-ai/flux-pulid";
    console.log(`[FalAdapter] Sending request to Fal.ai model: ${falModel}...`);

    let inputImageUrl = '';
    try {
      if (typeof Blob !== 'undefined' && fal.storage && fal.storage.upload) {
        const blob = new Blob([imageBuffer], { type: 'image/jpeg' });
        inputImageUrl = await fal.storage.upload(blob);
        console.log(`[FalAdapter] Uploaded source photo to Fal CDN: ${inputImageUrl}`);
      }
    } catch (uploadErr) {
      console.warn('[FalAdapter] Storage upload warning, falling back to data URI:', uploadErr.message);
    }

    if (!inputImageUrl) {
      inputImageUrl = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
    }

    let result = null;

    if (falModel === "fal-ai/flux-pulid") {
      try {
        console.log(`[FalAdapter] Running face ID preservation with fal-ai/flux-pulid...`);
        result = await fal.subscribe("fal-ai/flux-pulid", {
          input: {
            prompt: prompt,
            reference_image_url: inputImageUrl,
            id_weight: 1.0,
            num_inference_steps: 24,
            guidance_scale: 4.0,
          },
          logs: true,
          onQueueUpdate: (update) => {
            if (update.status === "IN_PROGRESS" && update.logs) {
              update.logs.map((log) => log.message).forEach(console.log);
            }
          },
        });
      } catch (pulidErr) {
        console.warn("[FalAdapter] flux-pulid fallback triggered (e.g. no face detected):", pulidErr.message);
        result = await fal.subscribe("fal-ai/flux/dev/image-to-image", {
          input: {
            prompt: prompt,
            image_url: inputImageUrl,
            strength: 0.65,
          },
          logs: true,
        });
      }
    } else {
      result = await fal.subscribe(falModel, {
        input: {
          prompt: prompt,
          image_url: inputImageUrl,
          strength: 0.65,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS" && update.logs) {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      });
    }

    if (!result || !result.images || result.images.length === 0) {
      throw new Error("Fal.ai returned no image output.");
    }

    const imageUrl = result.images[0].url;
    console.log(`[FalAdapter] Generation complete: ${imageUrl}`);

    // Fetch output image buffer
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    return {
      buffer: Buffer.from(arrayBuffer),
      cdnUrl: imageUrl,
    };
  }
}
