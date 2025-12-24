import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorsEntity, VendorStatus } from './vendors.entity';

@Injectable()
export class VendorsRepository {
  constructor(
    @InjectRepository(VendorsEntity)
    private readonly repository: Repository<VendorsEntity>,
  ) {}

  createVendor(data: Partial<VendorsEntity>) {
    const vendor = this.repository.create(data);
    return this.repository.save(vendor);
  }

  findAllVendors() {
    return this.repository.find();
  }

  findVendorById(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  findByStatus(status: VendorStatus) {
    return this.repository.find({ where: { statusVendor: status } });
  }

  updateVendor(id: string, data: Partial<VendorsEntity>) {
    return this.repository.save({ ...data, id });
  }

  deleteVendor(id: string) {
    return this.repository.delete(id);
  }
}
