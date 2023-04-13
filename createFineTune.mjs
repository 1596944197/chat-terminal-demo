import { api } from './init.mjs'
import { fileId } from './fileId.mjs'

async function createFineTune() {
  try {
    const response = await api.createFineTune({
      training_file: fileId,
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()