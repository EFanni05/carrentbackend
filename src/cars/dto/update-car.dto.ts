import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id : number

  @Optional()
  barnd?: string;

  @Optional()
  daily_cost?: number;

  @Optional()
  license_plate_number?: string;

  @Optional()
  model?: string;
}
