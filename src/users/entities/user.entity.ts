import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ min: 2 })
  first_name: string;

  @Prop({ min: 2 })
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, min: 4 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
