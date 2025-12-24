import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly repository: Repository<UsersEntity>,
  ) {}

  createUser(user: Partial<UsersEntity>) {
    return this.repository.save(user);
  }

  findAllUsers() {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.repository.findOne({ where: { email } });
  }

  updateUser(id: string, data: Partial<UsersEntity>) {
    return this.repository.save({ ...data, id });
  }

  deleteUser(id: string) {
    return this.repository.delete(id);
  }
}
