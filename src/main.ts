import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { Post } from './posts/entities/post.entity';
import { User } from './users/entities/user.entity';

async function bootstrap() {
  /*const connectionConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'api',
    entities: [Post, User],
  };*/
  const connectionConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '1234',
    database: 'api',
    entities: [Post, User],
  };

  const connection = await createConnection(connectionConfig);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
