import { api } from "./init.mjs";
import { createInterface } from "node:readline";
import { model } from "./model.mjs";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function sendMessage(prompt = '') {
  if (!prompt.trim()) return
  const response = await api.createCompletion({
    model,
    prompt,
  });
  console.log(response.data)
  readline.prompt()
}


readline.prompt()

readline.on('line', async (input) => {
  const i = input.trim()
  if (!i) return
  sendMessage(i)
})
