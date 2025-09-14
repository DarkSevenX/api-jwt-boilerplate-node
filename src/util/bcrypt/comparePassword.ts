import bcrypt from 'bcrypt'
import HttpError from '../httpError'

const comparePassword = async (password: string, hashedPassword: string) => {
  const isValid: boolean = await bcrypt.compare(password, hashedPassword)
  if (!isValid) {
    throw new HttpError('invalid password', 400)
  }
}

export default comparePassword
