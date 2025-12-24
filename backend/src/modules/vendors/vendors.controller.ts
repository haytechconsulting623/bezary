import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('vendors')
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vendor' })
  create(@Body() dto: CreateVendorDto) {
    return this.vendorsService.createVendor(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vendors' })
  findAll() {
    return this.vendorsService.getAllVendors();
  }

  @Get('status')
  @ApiOperation({ summary: 'Get vendors by status' })
  findByStatus(@Query('status') status: string) {
    return this.vendorsService.getVendorsByStatus(status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get vendor by ID' })
  findOne(@Param('id') id: string) {
    return this.vendorsService.getVendorById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update vendor by ID' })
  update(@Param('id') id: string, @Body() dto: UpdateVendorDto) {
    return this.vendorsService.updateVendor(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete vendor by ID' })
  remove(@Param('id') id: string) {
    return this.vendorsService.deleteVendor(id);
  }
}
