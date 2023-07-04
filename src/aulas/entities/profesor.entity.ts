import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Asignatura } from './asignatura.entity';

@Entity()
export class Profesor {
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

  @Column()
  Teléfono: string;

  Asignaturas: Asignatura[];
}
