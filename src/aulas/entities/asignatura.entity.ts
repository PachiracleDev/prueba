import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { Profesor } from './profesor.entity';
import { Alumno } from './alumno.entity';
import { Curso } from './curso.entity';

@Entity()
export class Asignatura {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Código: string;

  @Column()
  Nombre: string;

  @Column()
  HorasSemana: number;

  @OneToMany(() => Curso, (curso) => curso.Asignaturas)
  Curso: Curso;

  @OneToOne(() => Profesor, (profesor) => profesor.Id)
  @JoinColumn()
  Profesor: Profesor;

  @ManyToMany(() => Alumno)
  @JoinTable()
  Alumnos: Alumno[];
}
