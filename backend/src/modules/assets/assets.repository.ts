import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AssetsEntity } from './assets.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssetsRepository {
  constructor(
    @InjectRepository(AssetsEntity)
    private readonly repository: Repository<AssetsEntity>,
  ) {}

  createAsset(data: Partial<AssetsEntity>) {
    const asset = this.repository.create(data);
    return this.repository.save(asset);
  }

  findAll() {
    return this.repository.find({ relations: ['product'] });
  }

  findById(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['product'] });
  }

  updateAsset(id: string, data: Partial<AssetsEntity>) {
    return this.repository.save({ ...data, id });
  }

  deleteAsset(id: string) {
    return this.repository.delete(id);
  }
}
