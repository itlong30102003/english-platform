import { Controller, Get, Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from './entities/teacher.entity';

@Controller('api/teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get('top-rated')
  async getTopRated(): Promise<Teacher[]> {
    return this.teachersService.getTopRated(6);
  }

  @Get(':id')
    async findOne(@Param('id') id: string): Promise<Teacher | null> {
    return this.teachersService.findOne(+id);
    }
}