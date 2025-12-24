import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() createAssetsDto: CreateAssetDto) {
    return this.assetsService.createAsset(createAssetsDto);
  }

  @Get()
  findAll() {
    return this.assetsService.findAllAssets();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findAssetById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetsDto: UpdateAssetDto) {
    return this.assetsService.updateAsset(id, updateAssetsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.deleteAsset(id);
  }
}
