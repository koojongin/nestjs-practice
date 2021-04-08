import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@Module({
  imports: [PostsModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [LocalAuthGuard],
})
export class AppModule {}
