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

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  Apellidos: string;

  @Column()
  Dirección: string;

  @Column()
  Población: string;

  @Column()
  DNI: string;

  @Column()
  FechaNac: Date;

  @Column()
  CodPostal: string;

  @ManyToMany(() => Asignatura, (asignatura) => asignatura.Alumnos)
  Asignaturas: Asignatura[];

  @Column()
  Teléfono: string;
}
