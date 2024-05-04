import express from 'express'
import bodyParser from 'body-parser'
import rg from './routes/rg/rgRoutes.js'
import { monitorarRecursos } from './utils/monitoramento.js'

const app = express()
const PORT = 5555

app.use(bodyParser.json())

app.use('/reconhecimento', rg)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

monitorarRecursos()