import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user_id: User;

  @Prop({ min: 5, required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  slug: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
