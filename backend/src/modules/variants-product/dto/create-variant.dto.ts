import { IsNotEmpty, IsNumber, IsString, IsUUID, IsObject } from '@nestjs/class-validator';

export class CreateVariantDto {
  @IsNumber()
  priceCent: number;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsNumber()
  stockQuantity: number;

  @IsObject()
  attributes: Record<string, any>;

  @IsUUID()
  productId: string;
}
