import { Router } from 'express'
import { userSchema, editUserSchema } from '../model/User/userModel'
import verifyToken from '../middleware/jwt/verifyToken'
import { verifySchema } from '../middleware/validateSchema'
import { getUser, deleteUser } from '../controller/userController'

const userRoutes = Router()
userRoutes.use(verifyToken)

userRoutes
  .get('/', verifySchema(userSchema), getUser)
  .patch('/', verifySchema(userSchema), deleteUser)
  .delete('/', verifySchema(editUserSchema), deleteUser)

export default userRoutes
