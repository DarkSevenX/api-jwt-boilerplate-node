import jwt from 'jsonwebtoken'

interface Payload {
  id: number
  username: string
}

const createToken = (payload: Payload, expiresIn: any) =>
  jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn })

export default createToken

