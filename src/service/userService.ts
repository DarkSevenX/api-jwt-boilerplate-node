import prisma from '../config/database'
import { IUser, IEditUser } from '../model/IUser'

const userService = {
  create: async (data: IUser) => await prisma.user.create({ data }),

  getById: async (id: number) => await prisma.user.findFirst({ where: { id } }),

  getByUsername: async (username: string) => (
    await prisma.user.findUnique({ where: { username } })
  ),

  update: async (id: number, data: IEditUser) =>
    await prisma.user.update({
      where: { id },
      data,
    }),

  delete: async (id: number) => await prisma.user.delete({ where: { id } }),
}

export default userService
