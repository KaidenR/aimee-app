import app from './app'
import config from './config'
import { AddressInfo } from 'net'

const port = process.env.PORT || config.port

const server = app.listen(port, async () => {
  const { port } = <AddressInfo>server.address()

  console.log(`API listening at http://localhost:${port}`)
})