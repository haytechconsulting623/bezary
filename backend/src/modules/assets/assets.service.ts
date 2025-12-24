import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetsEntity } from './assets.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(AssetsEntity)
    private readonly assetsRepository: Repository<AssetsEntity>,
  ) {}

  async createAsset(createAssetsDto: CreateAssetDto): Promise<AssetsEntity> {
    const asset = this.assetsRepository.create({
      urlImage: createAssetsDto.urlImage,
      isMain: createAssetsDto.isMain,
      product: { id: createAssetsDto.productId },
    });
    return this.assetsRepository.save(asset);
  }

  findAllAssets(): Promise<AssetsEntity[]> {
    return this.assetsRepository.find({ relations: ['product'] });
  }

  async findAssetById(id: string): Promise<AssetsEntity> {
    const asset = await this.assetsRepository.findOne({
      where: { id },
      relations: ['product'],
    });
    if (!asset) throw new NotFoundException(`Asset with id ${id} not found`);
    return asset;
  }

  async updateAsset(id: string, updateAssetsDto: UpdateAssetDto): Promise<AssetsEntity> {
    const asset = await this.assetsRepository.preload({
      id,
      ...updateAssetsDto,
      product: updateAssetsDto.productId ? { id: updateAssetsDto.productId } : undefined,
    });
    if (!asset) throw new NotFoundException(`Asset with id ${id} not found`);
    return this.assetsRepository.save(asset);
  }

  async deleteAsset(id: string): Promise<void> {
    const result = await this.assetsRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Asset with id ${id} not found`);
  }
}
