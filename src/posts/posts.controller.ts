import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post as PostRest,
  Put,
  Query,
} from '@nestjs/common';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findOne(): Promise<Post> {
    return await this.postsService.findOne();
  }
}
