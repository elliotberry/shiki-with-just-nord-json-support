import esbuild from "esbuild"
import fs from "fs"

async function build() {
  //delete the old bundle

  if (fs.existsSync("bundle.js")) {
    fs.unlinkSync("bundle.js")
  }
  try {
    await esbuild.build({
      entryPoints: ["./index.js"], // Your script file
      bundle: true,
      minify: true,
      outfile: "bundle.js", // Output file
      platform: "neutral", // Suitable for Cloudflare Workers
      target: "esnext", // Target modern JS
      format: "esm", // Use ECMAScript modules, important for Cloudflare Workers
      external: [
        "shiki/core",
        "shiki/wasm",
        "shiki/langs/json.mjs",
        "shiki/themes/nord.mjs"
      ] // Specify external packages if necessary
    })
    console.log("Build completed successfully.")
  } catch (error) {
    console.error("Build failed:", error)
  }
}

build()
