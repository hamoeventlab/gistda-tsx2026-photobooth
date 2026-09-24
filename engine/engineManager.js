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
    // If the request specifically specifies fixed costume mode, route to face_swap adapter
    if (params.isCostume || params.costumeId) {
      console.log(`[EngineManager] Routing to FaceSwapAdapter for costume: ${params.costumeId}`);
      return await this.adapters.face_swap.generate(params);
    }

    const engineName = this.getActiveEngineName();
    const adapter = this.adapters[engineName];

    if (!adapter) {
      throw new Error(`Engine adapter '${engineName}' is not registered.`);
    }

    console.log(`[EngineManager] Running generation via active engine: '${engineName}'`);
    const result = await adapter.generate(params);

    if (Buffer.isBuffer(result)) {
      return { buffer: result, cdnUrl: null };
    }
    return result;
  }
}
