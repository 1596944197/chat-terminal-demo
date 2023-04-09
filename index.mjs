import rl from "node:readline"
import { api } from "./init.mjs"

const name = process.argv[2] || 'MEI'


const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const messages = [
  {
    role: 'system',
    content: 'now,we chat by terminal,you need output well-formatted text to the terminal'
  }
]

function sendMessage(message = '') {
  messages.push({
    role: 'user',
    content: message,
  })
  const proxy = process.env.PROXY_HOST && process.env.PROXY_PORT ? {
    proxy: {
      host: process.env.PROXY_HOST,
      port: process.env.PROXY_PORT,
    },
  } : {}
  return api.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  }, proxy).catch(console.error)
}

readline.prompt()

readline.on('line', async (input) => {
  const i = input.trim()
  if (!i) return
  console.log(`${name}:`, i)
  const result = await sendMessage(i)
  const content = result.data.choices.at(-1).message.content
  messages.push({
    role: 'assistant',
    content
  })
  console.log('AI:', content)
  readline.prompt()
})

readline.on('SIGINT', () => {
  console.log('bye')
  readline.close()
})