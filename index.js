import { getHighlighterCore } from "shiki/core"
import getWasm from "shiki/wasm"
import nord from "shiki/themes/nord.mjs"

async function main(value) {
  const highlighter = await getHighlighterCore({
    themes: [nord, import("shiki/themes/material-theme-ocean.mjs")],
    langs: [
      import("shiki/langs/json.mjs"),

      () => import("shiki/langs/css.mjs")
      // or a getter that returns custom grammar
      // async () => JSON.parse(await fs.readFile('my-grammar.json', 'utf-8'))
    ],
    loadWasm: getWasm
  })

  await highlighter.loadTheme(import("shiki/themes/nord.mjs"))

  const html = highlighter.codeToHtml("const a = 1", {
    lang: "json",
    theme: "nord"
  })

 
  return html
}

export default main
