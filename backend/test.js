import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    console.log("Connected to Prisma")
    console.log("hello")

    //Create one map

    //Create three different user

    //make user complete map

    //create an admin user

    //view user score through admin user


}

main().catch(e => {
    console.log("An error occured", e)
}).finally(async () => {
    await prisma.$disconnect()
    console.log("Disconnected from Prisma")
})