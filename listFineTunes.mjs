import { writeFileSync } from "fs"
import { api } from "./init.mjs"
const f = await api.listFineTunes()
writeFileSync('./model.mjs', "export const model = " + JSON.stringify(f.data.data.at(-1).fine_tuned_model, null, 2))