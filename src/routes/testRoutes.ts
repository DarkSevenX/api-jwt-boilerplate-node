import { Request, Response, Router } from 'express'
import verifyToken from '../middleware/jwt/verifyToken'

const testRoutes = Router()

testRoutes
  .get('/protected', verifyToken , (_req: Request, res: Response) => {
    res.json({
      message: 'ruta protegida, si ves esto estas autenticado'
    })
  })
  .get('/public', (_req: Request, res: Response) => {
    res.json({
      message: 'ruta publica'
    })
  })

export default testRoutes
