import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Asignatura } from './asignatura.entity';
import { Alumno } from './alumno.entity';

@Entity()
export class AlumnoAsignatura {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.Asignaturas)
  Alumno: Alumno;

  @Column()
  Nota: number;

  @Column({
    type: 'simple-array',
  })
  Incidencias: string[];

  @ManyToOne(() => Asignatura, (asignatura) => asignatura.Alumnos)
  Asignatura: Asignatura;
}
