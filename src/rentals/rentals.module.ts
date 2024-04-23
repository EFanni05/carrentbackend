import { Module } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { RentalsController } from './rentals.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RentalsController],
  providers: [RentalsService, PrismaService],
  exports : [RentalsService]
})
export class RentalsModule {}
