import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpStatus, HttpException, NotFoundException } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { RentalsService } from 'src/rentals/rentals.service';
import { CreateRentalDto } from 'src/rentals/dto/create-rental.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService, private readonly rentalService : RentalsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Post(':id/rent')
  rent(@Param('id',ParseIntPipe) id : number, @Body() rent : CreateRentalDto){
    if(rent.start_date != Date.now().toString()){
      throw new HttpException(`Starting day isn't today`, HttpStatus.NOT_ACCEPTABLE)
    }
    if(rent.end_date != new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toDateString()){
      throw new HttpException(`Ending day isn't correct`, HttpStatus.NOT_ACCEPTABLE)
    }
    if(rent.car_id != id){
      throw new HttpException(`Incorrect car id`, HttpStatus.NOT_ACCEPTABLE)
    }
    if(this.rentalService.rented(id,rent.start_date,rent.end_date) == null){
      throw new HttpException('This car already been rented', HttpStatus.CONFLICT)
    }
    if(this.carsService.findOne(id) == null){
      throw new NotFoundException()
    }
    return this.rentalService.create(rent)
  }
}
