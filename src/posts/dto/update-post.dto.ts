import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsMongoId, IsString, MinLength } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsMongoId()
  user_id?: string;

  @IsString()
  @MinLength(5)
  title?: string;

  @IsString()
  content?: string;

  @IsString()
  slug?: string;
}
