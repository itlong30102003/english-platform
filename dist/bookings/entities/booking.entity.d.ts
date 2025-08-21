import { Teacher } from '../../teachers/entities/teacher.entity';
export declare class Booking {
    id: number;
    studentName: string;
    studentPhone: string;
    studentEmail: string;
    selectedTimeSlot: string;
    learningGoal: string;
    status: string;
    createdAt: Date;
    teacher: Teacher;
}
