import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { AulaAsignatura } from './asignatura-aula.entity';

@Entity()
export class Aula {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Código: string;

  @Column()
  Piso: number;

  @Column()
  NumPupitres: number;

  @OneToMany(() => AulaAsignatura, (aulaAsignatura) => aulaAsignatura.Aula)
  AulaAsignaturas: AulaAsignatura[];
}
