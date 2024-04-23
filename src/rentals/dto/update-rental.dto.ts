import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalDto } from './create-rental.dto';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateRentalDto extends PartialType(CreateRentalDto) {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id : number

  @Optional()
  car_id?: number;

  @Optional()
  end_date?: string;

  @Optional()
  start_date?: string;
}
