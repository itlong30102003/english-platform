import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Teacher } from '../teachers/entities/teacher.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const teacher = await this.teachersRepository.findOne({
      where: { id: createBookingDto.teacherId }
    });

    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    const booking = this.bookingsRepository.create({
      ...createBookingDto,
      teacher,
    });

    const savedBooking = await this.bookingsRepository.save(booking);

    // Gửi email xác nhận
    await this.sendConfirmationEmail(savedBooking);
    
    // Thông báo cho giáo viên
    await this.notifyTeacher(savedBooking);

    return savedBooking;
  }

  private async sendConfirmationEmail(booking: Booking) {
    // Implement email service
    console.log(`Sending confirmation email to ${booking.studentEmail}`);
  }

  private async notifyTeacher(booking: Booking) {
    // Implement notification service
    console.log(`Notifying teacher about new booking: ${booking.id}`);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find({
      relations: ['teacher'],
      order: { createdAt: 'DESC' }
    });
  }

  async updateStatus(id: number, status: string): Promise<Booking> {
    await this.bookingsRepository.update(id, { status });
    const booking = await this.bookingsRepository.findOne({
        where: { id },
        relations: ['teacher']
    });

    if (!booking) {
        throw new NotFoundException(`Booking with id ${id} not found`);
    }

    return booking;
  }
}