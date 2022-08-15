import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { routes } from './routes'
import './clients/db'

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000

app.use(routes)

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`))

