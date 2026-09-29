import { MockAdapter } from "./adapters/mockAdapter.js";
import { FalAdapter } from "./adapters/falAdapter.js";
import { ReplicateAdapter } from "./adapters/replicateAdapter.js";
import { LocalComfyAdapter } from "./adapters/localComfyAdapter.js";
import { FaceSwapAdapter } from "./adapters/faceSwapAdapter.js";

export class EngineManager {
  constructor(config) {
    this.config = config;
    this.adapters = {
      mock: new MockAdapter(config),
      cloud_fal: new FalAdapter(config),
      cloud_replicate: new ReplicateAdapter(config),
      local_comfy: new LocalComfyAdapter(config),
      face_swap: new FaceSwapAdapter(config),
    };
  }

  getActiveEngineName() {
    if (process.env.ACTIVE_ENGINE) {
      return process.env.ACTIVE_ENGINE;
    }
    if (this.config.active_engine && this.config.active_engine !== "mock") {
      return this.config.active_engine;
    }
    if (process.env.FAL_KEY) {
      return "cloud_fal";
    }
    return this.config.active_engine || "mock";
  }

  async generate(params) {
    const engineName = this.getActiveEngineName();
    console.log(`[EngineManager] Generating via active engine: '${engineName}'`);

    const defaultSpacesuitPrompt =
      "cinematic portrait of this person as an elite astronaut in low Earth orbit, sleek futuristic spacesuit with GISTDA and Thailand mission patches, glowing cyan helmet visor reflections, THEOS-2 satellite and Earth horizon backdrop, dramatic studio lighting, 8k, photorealistic, sharp focus";

    params.prompt = params.prompt || defaultSpacesuitPrompt;

    const adapter = this.adapters[engineName];
    if (adapter) {
      try {
        console.log(`[EngineManager] Running generation via adapter '${engineName}'...`);
        const result = await adapter.generate(params);
        if (Buffer.isBuffer(result)) {
          return { buffer: result, cdnUrl: null };
        }
        return result;
      } catch (err) {
        console.warn(`[EngineManager] Engine '${engineName}' failed: ${err.message}. Triggering fallback...`);
      }
    }

    // Graceful offline/error fallback to local face_swap
    if (this.adapters.face_swap) {
      console.log(`[EngineManager] Fallback: routing to FaceSwapAdapter`);
      const fallbackResult = await this.adapters.face_swap.generate(params);
      if (Buffer.isBuffer(fallbackResult)) {
        return { buffer: fallbackResult, cdnUrl: null };
      }
      return fallbackResult;
    }

    throw new Error(`Engine adapter '${engineName}' failed and no fallback available.`);
  }
}
