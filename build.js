import * as esbuild from "npm:esbuild"

import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1"

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./mod.js"],
  outfile: "./bundle.js",
  bundle: true,
  format: "esm",
})

console.log(result.outputFiles)

esbuild.stop()
