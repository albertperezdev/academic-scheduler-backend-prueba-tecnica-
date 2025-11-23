import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  create(dto: CreateScheduleDto) {
    const schedule = this.scheduleRepository.create(dto);
    return this.scheduleRepository.save(schedule);
  }

  findAll() {
    return this.scheduleRepository.find({
      relations: ['usuario', 'asignatura'],
    });
  }

  findOne(id: number) {
    return this.scheduleRepository.findOne({
      where: { id },
      relations: ['usuario', 'asignatura'],
    });
  }

  update(id: number, dto: UpdateScheduleDto) {
    return this.scheduleRepository.update(id, dto);
  }

  remove(id: number) {
    return this.scheduleRepository.delete(id);
  }

  // ⭐ Endpoint obligatorio en la prueba
  findByUser(userId: number) {
    return this.scheduleRepository.find({
      where: { usuario: { id: userId } },
      relations: ['usuario', 'asignatura'],
    });
  }
}
