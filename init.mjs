import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'


dotenv.config()

const config = new Configuration({
  apiKey: process.env.API_KEY,
})

export const api = new OpenAIApi(config)
