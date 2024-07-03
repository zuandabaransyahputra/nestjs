import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PostModule, PrismaModule],
})
export class AppModule {}
