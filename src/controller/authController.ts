import createToken from '../middleware/jwt/createToken'
import { IUser } from '../model/IUser'
import userService from '../service/userService'
import { RequestHandler } from 'express'
import hashPassword from '../util/bcrypt/hashpassword'
import comparePassword from '../util/bcrypt/comparePassword'

export const register: RequestHandler = async (req, res) => {
  const data: IUser = req.body
  const hashedPassword = await hashPassword(data.password)

  await userService.create({
    ...data,
    password: hashedPassword,
  })

  res.status(200).json({ message: 'usuario creado' })
}

export const login: RequestHandler = async (req, res) => {
  const data: IUser = req.body
  const user = await userService.getByUsername(data.username)

  if (!user) return res.status(404).json({ message: 'username no encontrado' })
  await comparePassword(data.password, user.password)

  const payload = {
    id: user.id,
    username: data.username,
  }

  const token = createToken(payload, '1h')
  res.header('token', token).json({ user: payload })
}
