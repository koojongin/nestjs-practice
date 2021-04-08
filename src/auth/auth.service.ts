import { Injectable } from '@nestjs/common';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class AuthService {
  constructor(private postsService: PostsService) {}

  async validate(data): Promise<any> {
    const post = await this.postsService.findOne();
    if (post) {
      return post;
    }
    return null;
  }
}
