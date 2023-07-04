import { Column, ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Asignatura } from './asignatura.entity';

@Entity()
export class AulaAsignatura {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  FechaInicio: Date;

  @Column()
  FechaFin: Date;

  @ManyToOne(() => Asignatura, (asignatura) => asignatura.Id)
  Asignatura: Asignatura;

  @Column()
  Aula: number;
}
