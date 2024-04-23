import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from 'src/prisma.service';
import { RentalsService } from 'src/rentals/rentals.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService, RentalsService],
})
export class CarsModule {}
