import { PrismaClient } from "prisma"

const prisma = new PrismaClient()


async function main() {
    console.log("Connected to Prisma")
    console.log("hello")

    
}

main().catch(e => {
    console.log("An error occured", e)
}).finally(async () => {
    await prisma.$disconnect()
    console.log("Disconnected from Prisma")
})