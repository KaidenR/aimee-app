import app from './app'
import config from './config'
import { AddressInfo } from 'net'

const server = app.listen(config.port, async () => {
  const { port } = <AddressInfo>server.address()

  console.log(`API listening at http://localhost:${port}`)
})