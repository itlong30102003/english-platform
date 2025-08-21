import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  studentName!: string;

  @IsString()
  @IsNotEmpty()
  studentPhone!: string;

  @IsEmail()
  studentEmail!: string;

  @IsNumber()
  teacherId!: number;

  @IsString()
  @IsNotEmpty()
  selectedTimeSlot!: string;

  @IsString()
  learningGoal!: string;
}