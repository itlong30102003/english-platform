import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Teacher } from '../teachers/entities/teacher.entity';
export declare class BookingsService {
    private bookingsRepository;
    private teachersRepository;
    constructor(bookingsRepository: Repository<Booking>, teachersRepository: Repository<Teacher>);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    private sendConfirmationEmail;
    private notifyTeacher;
    findAll(): Promise<Booking[]>;
    updateStatus(id: number, status: string): Promise<Booking>;
}
