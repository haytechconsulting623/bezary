import { ApiProperty } from '@nestjs/swagger';
import { VendorStatus, SubscribeStatus } from '../vendors.entity';
import { IsEnum, IsNumber, IsOptional, IsString, IsDate } from '@nestjs/class-validator';

export class CreateVendorDto {
  @ApiProperty()
  @IsString()
  storeLogo: string;

  @ApiProperty()
  @IsString()
  storeName: string;

  @ApiProperty()
  @IsString()
  storeCin: string;

  @ApiProperty()
  @IsString()
  storeAddress: string;

  @ApiProperty({ enum: VendorStatus, default: VendorStatus.PENDING })
  @IsEnum(VendorStatus)
  statusVendor: VendorStatus;

  @ApiProperty()
  @IsNumber()
  balanceAvailable: number;

  @ApiProperty()
  @IsNumber()
  commissionRate: number;

  @ApiProperty({ enum: SubscribeStatus, default: SubscribeStatus.TRIAL })
  @IsEnum(SubscribeStatus)
  statusSubscribe: SubscribeStatus;

  @ApiProperty({ type: Date })
  @IsOptional()
  @IsDate()
  subscribtionEnd?: Date;
}
