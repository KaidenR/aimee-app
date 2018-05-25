import * as express from 'express'

import routers from './routers'

const app = express()

app.use(express.static('../client/dist'))
app.use('/api', routers)

export default app