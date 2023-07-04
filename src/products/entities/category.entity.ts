import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    name: 'codcat',
  })
  Codigo: string;

  @Column({
    name: 'nomcat',
  })
  Nombre: string;

  @ManyToOne(() => Product, (product) => product.Id)
  Products: Product[];
}
