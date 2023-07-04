import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      Categoria: createProductDto.categoria,
      Codigo: createProductDto.codigo,
      Nombre: createProductDto.nombre,
      Precio: createProductDto.precio,
    });

    console.log(newProduct);

    return await this.productRepository.save(newProduct).catch(() => {
      throw new BadRequestException('Ya existe un producto con ese código');
    });
  }

  async findAll() {
    return await this.productRepository.find({
      relations: ['Categoria'],
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({
      where: {
        Id: id,
      },
    });
    if (product) {
      product.Categoria = updateProductDto.categoria;
      product.Codigo = updateProductDto.codigo;
      product.Nombre = updateProductDto.nombre;
      return await this.productRepository.save(product);
    } else {
      throw new BadRequestException('No existe el producto');
    }
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}
