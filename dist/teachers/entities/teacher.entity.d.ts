import { Booking } from '../../bookings/entities/booking.entity';
export declare class Teacher {
    id: number;
    name: string;
    nationality: string;
    experience: string;
    rating: number;
    reviewCount: number;
    pricePerSession: number;
    specialties: string[];
    avatarUrl: string;
    availableSlots: string[];
    isActive: boolean;
    bookings: Booking[];
}
