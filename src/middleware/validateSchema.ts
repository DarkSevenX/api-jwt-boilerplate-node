import { Request, Response, NextFunction } from 'express'
import { ZodError, ZodObject } from 'zod'

export const verifySchema =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error: any) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'validation Error',
          errors: error.issues.map((err) => ({
            path: err.path,
            message: err.message,
          })),
        })
      }

      throw new Error('Error verificando schema: ', error.message)
    }
  }
