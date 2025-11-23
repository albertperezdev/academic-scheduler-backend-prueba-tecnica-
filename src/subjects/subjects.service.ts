import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    private readonly usersService: UsersService,
  ) {}

  async create(dto: CreateSubjectDto) {
    const profesor = await this.usersService.findOne(dto.profesorId);

    if (!profesor) {
      throw new NotFoundException('El profesor no existe');
    }

    if (profesor.role !== 'profesor') {
      throw new BadRequestException('Este usuario no tiene rol de profesor');
    }

    const subject = this.subjectRepository.create(dto);
    return this.subjectRepository.save(subject);
  }

  findAll() {
    return this.subjectRepository.find({
      relations: ['profesor', 'schedule'],
    });
  }

  findOne(id: number) {
    return this.subjectRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateSubjectDto) {
    if (!dto.profesorId)
      throw new BadRequestException('Debe enviar profesorId al actualizar');
    const profesor = await this.usersService.findOne(dto.profesorId);

    if (!profesor) {
      throw new NotFoundException('El profesor no existe');
    }

    if (profesor.role !== 'profesor') {
      throw new BadRequestException('Este usuario no tiene rol de profesor');
    }

    await this.subjectRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.subjectRepository.delete(id);
  }
}
