import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductStatus } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  createProduct(dto: CreateProductDto) {
    return this.productsRepository.createProduct(dto);
  }

  getAllProducts() {
    return this.productsRepository.findAllProducts();
  }

  getProductById(id: string) {
    return this.productsRepository.findProductById(id);
  }

  getProductsByStatus(status: ProductStatus) {
    return this.productsRepository.findByStatus(status);
  }

  updateProduct(id: string, dto: UpdateProductDto) {
    return this.productsRepository.updateProduct(id, dto);
  }

  deleteProduct(id: string) {
    return this.productsRepository.deleteProduct(id);
  }
}
