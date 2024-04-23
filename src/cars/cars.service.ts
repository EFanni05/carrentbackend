import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private readonly db : PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    return await this.db.cars.create({
      data : {
        license_plate_number : createCarDto.license_plate_number,
        brand : createCarDto.barnd,
        daily_cost : createCarDto.daily_cost,
        model : createCarDto.model
      }
    });
  }

  async findAll() {
    return await this.db.cars.findMany({
      select : {
        brand : true,
        created_at : false,
        daily_cost : true,
        id : true,
        license_plate_number : true,
        model : true,
        updated_at : false
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
