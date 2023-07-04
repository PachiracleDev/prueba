import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    name: 'codpro',
  })
  Codigo: string;

  @Column({
    name: 'nompro',
    unique: true,
  })
  Nombre: string;

  @Column({
    name: 'precio',
  })
  Precio: number;

  @ManyToOne(() => Category, (category) => category.Products)
  @JoinColumn()
  Categoria: Category | number;
}
