import { api } from "./init.mjs";
import { createReadStream } from "fs";

try {
  const response = await api.createImageVariation(
    createReadStream('./test2.png'),
    1,
    '1024x1024',
    'url',
    undefined,
    {
      proxy: {
        host: process.env.PROXY_HOST,
        port: process.env.PROXY_PORT,
      }
    }
  )
  console.log(response.data)
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}