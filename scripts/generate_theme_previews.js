import * as fal from "@fal-ai/serverless-client";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.FAL_KEY) {
  console.error("Error: FAL_KEY not found in .env");
  process.exit(1);
}

fal.config({
  credentials: process.env.FAL_KEY,
});

const themesDir = path.resolve("./public/themes");
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

const config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

async function generatePreview(preset) {
  const outputPath = path.join(themesDir, `${preset.id}.jpg`);
  console.log(`\n🎨 Generating visual preview for [${preset.name}]...`);
  console.log(`Prompt: "${preset.prompt}"`);

  try {
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt: `high-end studio portrait headshot, ${preset.prompt}, clean composition, centered, 8k, masterpiece`,
        image_size: "square_hd",
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          console.log(`[${preset.id}] Generating in progress...`);
        }
      },
    });

    if (result && result.images && result.images.length > 0) {
      const imgUrl = result.images[0].url;
      console.log(`[${preset.id}] Image generated: ${imgUrl}`);

      const res = await fetch(imgUrl);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Saved preview to ${outputPath} (${buffer.length} bytes)`);
    } else {
      console.error(`❌ No image returned for ${preset.id}`);
    }
  } catch (err) {
    console.error(`❌ Error generating ${preset.id}:`, err.message);
  }
}

async function run() {
  console.log(`🚀 Starting Fal theme visual preview generation for ${config.presets.length} presets...`);
  for (const preset of config.presets) {
    await generatePreview(preset);
  }
  console.log("\n🎉 All theme visual previews generated successfully!");
}

run();
