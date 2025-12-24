import { Injectable } from '@nestjs/common';
import { VendorsRepository } from './vendors.repository';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(private readonly vendorsRepository: VendorsRepository) {}

  createVendor(dto: CreateVendorDto) {
    return this.vendorsRepository.createVendor(dto);
  }

  getAllVendors() {
    return this.vendorsRepository.findAllVendors();
  }

  getVendorById(id: string) {
    return this.vendorsRepository.findVendorById(id);
  }

  updateVendor(id: string, dto: UpdateVendorDto) {
    return this.vendorsRepository.updateVendor(id, dto);
  }

  deleteVendor(id: string) {
    return this.vendorsRepository.deleteVendor(id);
  }

  getVendorsByStatus(status: string) {
    return this.vendorsRepository.findByStatus(status as any);
  }
}
