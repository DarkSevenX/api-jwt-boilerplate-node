import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.headers['token']

  try {
    const decoded: any = jwt.verify(
      token as string,
      process.env.JWT_SECRET || 'secret',
    )
    
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error })
  }
}

export default verifyToken
