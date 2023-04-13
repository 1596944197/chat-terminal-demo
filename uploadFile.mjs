import { api } from "./init.mjs";
import fs from 'fs'

async function upload() {
  try {
    const response = await api.createFile(
      fs.createReadStream('./data.jsonl'),
      'fine-tune'
    );
    console.log('File ID: ', response.data.id)
    fs.writeFileSync('./fileId.js', `export const fileId = "${response.data.id}"`)
  } catch (err) {
    console.log('err: ', err)
  }
}

upload()