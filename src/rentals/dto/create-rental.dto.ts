import { IsDateString, IsNotEmpty, IsNumber } from "class-validator"

export class CreateRentalDto {
  @IsNotEmpty()
  @IsNumber()
  car_id : number

  @IsNotEmpty()
  @IsDateString()
  start_date : string

  @IsNotEmpty()
  @IsDateString()
  end_date : string
}
