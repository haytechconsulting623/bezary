import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from '@nestjs/class-validator';

export class CreateAssetDto {
  @ApiProperty({ description: 'URL de l’image' })
  @IsString()
  @IsNotEmpty()
  urlImage: string;

  @ApiProperty({ description: 'Indique si c’est l’image principale', default: false })
  @IsBoolean()
  isMain: boolean;

  @ApiProperty({ description: 'ID du produit associé' })
  @IsUUID()
  productId: string;
}
