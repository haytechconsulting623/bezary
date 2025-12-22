import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly repository: Repository<UsersEntity>,
  ) {}

  create(user: Partial<UsersEntity>): Promise<UsersEntity> {
    return this.repository.save(user);
  }

  findAll(): Promise<UsersEntity[]> {
    return this.repository.find();
  }

  findByEmail(email: string): Promise<UsersEntity | null> {
    return this.repository.findOne({ where: { email } });
  }
}
