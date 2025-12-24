import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(dto: CreateUserDto) {
    return this.usersRepository.createUser(dto);
  }

  getAllUsers() {
    return this.usersRepository.findAllUsers();
  }

  getUserById(id: string) {
    return this.usersRepository.findById(id);
  }

  updateUser(id: string, dto: UpdateUserDto) {
    return this.usersRepository.updateUser(id, dto);
  }

  deleteUser(id: string) {
    return this.usersRepository.deleteUser(id);
  }
}
