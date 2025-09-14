import { RequestHandler } from 'express'
import type { IUser } from '../model/IUser'
import userService from '../service/userService'

export const getUser: RequestHandler = async (req, res) => {
  const user = await userService.getById(req.user.id)
  return !user
    ? res.status(404).json({
        message: 'usuario no encontrado',
      })
    : res.json(user)
}

export const updateUser: RequestHandler = async (req, res) => {
  const data:IUser = req.body 
  const user = await userService.update(req.user.id, data)
  return res.json(user)
}

export const deleteUser: RequestHandler = async (req, res) => {
  await userService.delete(req.user.id)
  return res.status(204).send()
}
