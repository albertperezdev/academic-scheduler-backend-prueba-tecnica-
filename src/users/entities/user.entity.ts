import { Schedule } from 'src/schedule/entities/schedule.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  activeUser: boolean;

  @OneToMany(() => Schedule, (schedule) => schedule.usuario)
  schedules: Schedule[];

  @OneToMany(() => Subject, (subject) => subject.profesor_id)
  subjects: Subject[];
}
