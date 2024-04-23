import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CarsModule } from './cars/cars.module';
import { RentalsModule } from './rentals/rentals.module';

@Module({
  imports: [CarsModule, RentalsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
