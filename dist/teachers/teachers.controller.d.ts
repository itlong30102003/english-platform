import { TeachersService } from './teachers.service';
import { Teacher } from './entities/teacher.entity';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    findAll(): Promise<Teacher[]>;
    getTopRated(): Promise<Teacher[]>;
    findOne(id: string): Promise<Teacher | null>;
}
