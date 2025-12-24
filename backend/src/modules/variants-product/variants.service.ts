import { Injectable, NotFoundException } from '@nestjs/common';
import { VariantsRepository } from './variants.repository';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { ProductsEntity } from '../products/products.entity';

@Injectable()
export class VariantsService {
  constructor(
    private readonly variantsRepository: VariantsRepository,
  ) {}

  async create(dto: CreateVariantDto) {
    const variant = this.variantsRepository.create({
      priceCent: dto.priceCent,
      sku: dto.sku,
      stockQuantity: dto.stockQuantity,
      attributes: dto.attributes,
      product: { id: dto.productId } as ProductsEntity,
    });

    return this.variantsRepository.save(variant);
  }

  async findAll() {
    return this.variantsRepository.findAll();
  }

  async findOne(id: string) {
    const variant = await this.variantsRepository.findOneById(id);

    if (!variant) {
      throw new NotFoundException('Variant not found');
    }

    return variant;
  }

  async update(id: string, dto: UpdateVariantDto) {
    const variant = await this.findOne(id);

    Object.assign(variant, dto);

    return this.variantsRepository.save(variant);
  }

  async remove(id: string) {
    const variant = await this.findOne(id);
    return this.variantsRepository.remove(variant);
  }
}
