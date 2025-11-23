import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Subject } from 'src/subjects/entities/subject.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia: string;

  @Column()
  hora_inicio: string;

  @Column()
  hora_fin: string;

  @ManyToOne(() => Users, (usuario) => usuario.schedules)
  @JoinColumn({ name: 'usuario_id' }) // ← FK REAL
  usuario: Users;

  @Column({ name: 'usuario_id' })
  usuario_id: number; // ← guarda el ID

  @ManyToOne(() => Subject, (asignatura) => asignatura.schedule)
  @JoinColumn({ name: 'asignatura_id' }) // ← FK REAL
  asignatura: Subject;

  @Column({ name: 'asignatura_id' })
  asignatura_id: number; // ← guarda el ID
}
