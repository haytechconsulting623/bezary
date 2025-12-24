import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariantsEntity } from './variants.entity';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { VariantsRepository } from './variants.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([VariantsEntity]),
  ],
  controllers: [VariantsController],
  providers: [VariantsService, VariantsRepository],
  exports: [VariantsService],
})
export class VariantsModule {}
