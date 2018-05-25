import * as express from 'express'

const router = express.Router()

router.get('/system/health', handleHealthRequest)

async function handleHealthRequest(req:express.Request, res:express.Response) {
  res.sendStatus(200)
}

export default router