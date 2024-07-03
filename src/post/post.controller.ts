import {
  Controller,
  Get,
  Post as Posting,
  Body,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }

  @Posting()
  async createUser(@Body() body: { title: string }): Promise<Post> {
    return this.postService.createPost(body);
  }

  @Put(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title?: string },
  ): Promise<Post> {
    return this.postService.updatePost(id, body);
  }
}
