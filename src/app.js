import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { routes } from './routes'
import './clients/db'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use(routes)

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`))

