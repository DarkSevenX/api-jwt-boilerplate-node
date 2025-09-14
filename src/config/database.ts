import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()
prisma.$connect().catch((error) => {
  console.error(error)
  process.exit(1)
})

export default prisma
