import * as express from 'express'
import system from './system'

const router = express.Router()

router.use(system)

export default router