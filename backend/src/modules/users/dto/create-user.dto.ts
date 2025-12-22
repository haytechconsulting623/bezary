import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../users.entity';
import { IsBoolean, IsEmail, IsEnum, IsOptional, IsPhoneNumber, MinLength } from '@nestjs/class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'StrongPassword123' })
  @MinLength(6)
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.CLIENT,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ example: '+261341234567', required: false })
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ default: false, required: false })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;
}
