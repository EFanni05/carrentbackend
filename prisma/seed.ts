import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  for(let i = 0; i < 5; i++){
    const rent = await prisma.rentals.create({
      data : {
        car_id : i,
        start_date : Date.now().toString(),
        end_date : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toDateString()
      }
    })
    console.log(JSON.stringify(rent))
  }
}

main()
