import { ApiProperty } from '@nestjs/swagger';
import { ProductStatus } from '../products.entity';
import { IsEnum, IsOptional, IsString } from '@nestjs/class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Chaussures de sport' })
  @IsString()
  nameProduct: string;

  @ApiProperty({ example: 'Sport' })
  @IsString()
  categoryProduct: string;

  @ApiProperty({ enum: ProductStatus, example: ProductStatus.DRAFT, required: false })
  @IsOptional()
  @IsEnum(ProductStatus)
  statusProduct?: ProductStatus;

  @ApiProperty({ default: false, required: false })
  @IsOptional()
  isDelete?: boolean;
}
