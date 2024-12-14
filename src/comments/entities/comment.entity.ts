import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user_id: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Post.name,
    required: true,
  })
  post_id: Post;

  @Prop({ required: true })
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
