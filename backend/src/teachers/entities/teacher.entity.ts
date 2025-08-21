import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from '../../bookings/entities/booking.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  nationality!: string;

  @Column()
  experience!: string;

  @Column('decimal', { precision: 2, scale: 1 })
  rating!: number;

  @Column()
  reviewCount!: number;

  @Column()
  pricePerSession!: number;

  @Column('simple-array')
  specialties!: string[];

  @Column()
  avatarUrl!: string;

  @Column('simple-array')
  availableSlots!: string[];

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(() => Booking, booking => booking.teacher)
  bookings!: Booking[];
}