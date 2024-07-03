import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async createPost(data: { title: string }): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(id: number, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }
}
