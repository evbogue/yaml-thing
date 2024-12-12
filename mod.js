import { parse, stringify } from 'jsr:@std/yaml'
import { extractYaml } from 'jsr:@std/front-matter'

export const yaml = {
  create: async (obj, content) => {
    try {
      return `---
${await stringify(obj)}---
${content}`
    } catch (err) {}
  },
  parse: async (doc) => {
    try {
      const extracted = await extractYaml(doc)
      const front = await parse(extracted.frontMatter)
      front.body = extracted.body
      return front
    } catch (err) {
      return { body: doc}
    }
  }
}
