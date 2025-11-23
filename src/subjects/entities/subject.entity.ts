import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { Users } from 'src/users/entities/user.entity';

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ name: 'max_clases_per_week', default: 3 })
  max_clases: number;

  @ManyToOne(() => Users, (user) => user.subjects)
  @JoinColumn({ name: 'profesor_id' }) // ← AQUÍ VINCULAS LA FK REAL
  profesor: Users;

  @Column({ name: 'profesor_id' })
  profesor_id: number;

  @OneToMany(() => Schedule, (schedule) => schedule.asignatura)
  schedule: Schedule[];
}
