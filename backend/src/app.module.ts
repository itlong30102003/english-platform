import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TeachersModule } from './teachers/teachers.module';
import { BookingsModule } from './bookings/bookings.module';
import { Teacher } from './teachers/entities/teacher.entity';
import { Booking } from './bookings/entities/booking.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'sa',
      database: process.env.DB_NAME || 'english_platform',
      entities: [Teacher, Booking],
      synchronize: true,
    }),
    TeachersModule,
    BookingsModule,
  ],
})
export class AppModule {}