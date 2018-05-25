import * as express from 'express'
import getSystemHealth from '../commands/getSystemHealth'

const router = express.Router()

router.get('/system/health', handleHealthRequest)

async function handleHealthRequest(req:express.Request, res:express.Response) {
  const health = await getSystemHealth()
  res.send(health)
}

export default router