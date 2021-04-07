/**
 * 계정 서비스
 */
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor() {
    //
  }

  async findOne(): Promise<any> {
    const post = await getRepository(Post).findOne();
    console.log(post);
    return post;
  }
}
