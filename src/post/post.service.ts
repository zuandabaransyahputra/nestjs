import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPostsByLanguage(lang: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        lang,
      },
    });
  }

  async createPost(data: { title: string; lang: string }): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  // Implement other CRUD operations as needed
}
