import express, { Request, Response } from 'express'
import showRequests from './middleware/showRequest'
import cors from 'cors'
import authRouter from './routes/authRoutes'
import testRoutes from './routes/testRoutes'

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(showRequests)
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:8080'],
  exposedHeaders: ['token'],
  credentials: true
}))

app.get('/ping', (_req: Request, res: Response) => {
  res.send({ message: 'pong' })
})

app.use('/auth', authRouter)
app.use('/test', testRoutes)

//TODO: añadir validaciones con zod (listo)

export { app, port }
