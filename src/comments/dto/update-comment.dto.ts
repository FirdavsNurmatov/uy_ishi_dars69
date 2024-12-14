import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsMongoId, IsString } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsMongoId()
  user_id?: string;

  @IsMongoId()
  post_id?: string;

  @IsString()
  content?: string;
}
