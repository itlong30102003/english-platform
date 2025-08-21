import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  studentName!: string;

  @Column()
  studentPhone!: string;

  @Column()
  studentEmail!: string;

  @Column()
  selectedTimeSlot!: string;

  @Column('text')
  learningGoal!: string;

  @Column({ default: 'pending' })
  status!: string; // pending, confirmed, completed, cancelled

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Teacher, teacher => teacher.bookings)
  teacher!: Teacher;
}