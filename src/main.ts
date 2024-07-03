import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: ['http://localhost:4321'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // jika Anda mengizinkan cookie
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
