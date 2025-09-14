import { RequestHandler } from 'express'

const showRequests: RequestHandler = async (req, _res, next) => {
  console.log(` ${req.path} - ${req.method} `)
  next()
}

export default showRequests
