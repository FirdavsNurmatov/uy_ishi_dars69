import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/main-loyiha'),
    AuthModule,
    UsersModule,
    CommentsModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
