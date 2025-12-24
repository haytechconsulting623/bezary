import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VariantsEntity } from './variants.entity';

@Injectable()
export class VariantsRepository {
  constructor(
    @InjectRepository(VariantsEntity)
    private readonly repository: Repository<VariantsEntity>,
  ) {}

  create(data: Partial<VariantsEntity>) {
    return this.repository.create(data);
  }

  save(variant: VariantsEntity) {
    return this.repository.save(variant);
  }

  findAll() {
    return this.repository.find({ relations: ['product'] });
  }

  findOneById(id: string) {
    return this.repository.findOne({
      where: { id },
      relations: ['product'],
    });
  }

  remove(variant: VariantsEntity) {
    return this.repository.remove(variant);
  }
}
