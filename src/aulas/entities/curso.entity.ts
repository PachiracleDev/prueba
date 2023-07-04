import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Profesor } from './profesor.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Código: string;

  @Column()
  Nombre: string;

  @OneToMany(() => Asignatura, (asignatura) => asignatura.Id)
  Asignaturas: Asignatura[];

  @OneToOne(() => Profesor, (profesor) => profesor.Id)
  @JoinColumn()
  Tutor: Profesor;
}
