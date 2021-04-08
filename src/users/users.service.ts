import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  repository;
  constructor() {
    this.repository = getRepository(User);
  }

  async findOne(identifier): Promise<User> {
    const user = await this.repository.findOne({ identifier });
    return user;
  }

  async find(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}
