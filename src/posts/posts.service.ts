import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PostsService {
  repository;
  constructor() {
    this.repository = getRepository(Post);
  }

  async findOne(): Promise<Post | undefined> {
    const post = await this.repository.findOne();
    return post;
  }
}
