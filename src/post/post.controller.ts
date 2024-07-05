import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':la')
  async getPosts(@Param('la') la: string): Promise<PostModel[]> {
    return this.postService.getPostsByLanguage(la);
  }

  @Post()
  async createPost(
    @Body() postData: { title: string; lang: string },
  ): Promise<PostModel> {
    return this.postService.createPost(postData);
  }
}
