import { Injectable } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RentalsService {
  constructor(private readonly db : PrismaService) {}
  async create(createRentalDto: CreateRentalDto) {
    return await this.db.rentals.create({
      data : {
        car_id : createRentalDto.car_id,
        start_date : createRentalDto.start_date,
        end_date : createRentalDto.end_date
      }
    });
  }

  async rented(id : number,start_date : string,end_date: string){
    return await this.db.rentals.findFirstOrThrow({
      where : {
        car_id : id,
        AND : {
          start_date : start_date,
          AND : {
            end_date : end_date
          }
        }
      }
    })
  }
}
