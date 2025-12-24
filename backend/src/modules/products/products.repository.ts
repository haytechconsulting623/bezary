import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity, ProductStatus } from './products.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly repository: Repository<ProductsEntity>,
  ) {}

  createProduct(data: Partial<ProductsEntity>) {
    const product = this.repository.create(data);
    return this.repository.save(product);
  }

  findAllProducts() {
    return this.repository.find();
  }

  findProductById(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  findByStatus(status: ProductStatus) {
    return this.repository.find({ where: { statusProduct: status } });
  }

  updateProduct(id: string, data: Partial<ProductsEntity>) {
    return this.repository.save({ ...data, id });
  }

  deleteProduct(id: string) {
    return this.repository.delete(id);
  }
}
