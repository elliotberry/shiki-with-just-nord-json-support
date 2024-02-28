import { getHighlighterCore } from "shiki/core"
import getWasm from "shiki/wasm"
import nord from "shiki/themes/nord.mjs"

async function main(value) {
  const highlighter = await getHighlighterCore({
    themes: [nord, import("shiki/themes/nord.mjs")],
    langs: [
      import("shiki/langs/json.mjs"),

      () => import("shiki/langs/css.mjs")
   ],
    loadWasm: getWasm
  })

  await highlighter.loadTheme(import("shiki/themes/nord.mjs"))

  const html = highlighter.codeToHtml(value, {
    lang: "json",
    theme: "nord"
  })

 
  return html
}

export default main
