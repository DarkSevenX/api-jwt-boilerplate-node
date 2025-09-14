import z from 'zod'

const baseUser = {
  username: z.string().min(1).max(255),
  role: z.string().min(1).max(255),
  password: z.string().min(1),
}

export const userSchema = z.object(baseUser)

export const editUserSchema = z.object(baseUser)
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
      message: 'Debe enviar al menos un campo para editar',
      path: [], // aplica el error al nivel del objeto completo
    })
