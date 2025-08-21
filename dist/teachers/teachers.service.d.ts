import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
export declare class TeachersService {
    private teachersRepository;
    constructor(teachersRepository: Repository<Teacher>);
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher | null>;
    getTopRated(limit?: number): Promise<Teacher[]>;
}
