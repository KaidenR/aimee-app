import app from './app'
import config from './config'
import { AddressInfo } from 'net'
import pg from './common/postgres-client'
import * as dotenv from 'dotenv'
import { systemRepo } from './common/repos';

dotenv.load({ path: '../.env' })

const port = process.env.PORT || config.port

async function initializeApp() {
  try {
    await initializePostgres()
    await initializeExpress()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function initializePostgres() {
  console.log('Connecting to Postgres DB...')
  await pg.connect()
  await systemRepo.updateLastConnectedDate()
  console.log('Connected!')
}

async function initializeExpress() {
  const server = app.listen(port, async () => {
    const { port } = <AddressInfo>server.address()

    console.log(`API listening at http://localhost:${port}`)
  })
}

void initializeApp()