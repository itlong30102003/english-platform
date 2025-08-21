import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  async findAll(): Promise<Teacher[]> {
    return this.teachersRepository.find({
      where: { isActive: true },
      order: { rating: 'DESC' }
    });
  }

  // ...existing code...
  async findOne(id: number): Promise<Teacher | null> {
    return this.teachersRepository.findOneBy({
      id,
      isActive: true
    });
  }
// ...existing code...

  async getTopRated(limit: number = 6): Promise<Teacher[]> {
    return this.teachersRepository.find({
      where: { isActive: true },
      order: { rating: 'DESC', reviewCount: 'DESC' },
      take: limit
    });
  }
}