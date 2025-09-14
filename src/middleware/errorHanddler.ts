import { ErrorRequestHandler } from 'express';

interface Error {
  message?: string
  status?: number
  code?: string
  meta?: {
    target?: string[]
  }
}

const errorHanddler: ErrorRequestHandler = (error: Error, _req, res, _next) => {
  console.log(error)
  let message = error.message || 'internal server error'
  let status = error.status || 500

  if (error.constructor.name === 'PrismaClientKnownRequestError') {
    switch (error.code) {
      case 'P2002':
        message = `el ${error.meta?.target} ya está en uso` 
        status = 400
        break;
      default:
        message = `Error de prisma no manejado, revisar logs` 
        break;
    }
  }

  return res.status(status).json({
    message,
    status
  }) 
}

export default errorHanddler
