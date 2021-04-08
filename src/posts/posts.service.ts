import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor() {
    //
  }

  async findOne(): Promise<Post | undefined> {
    const post = await getRepository(Post).findOne();
    return post;
  }
}
