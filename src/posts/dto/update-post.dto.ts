import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsMongoId, IsString, Min } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsMongoId()
  user_id?: string;

  @IsString()
  @Min(5)
  title?: string;

  @IsString()
  content?: string;

  @IsString()
  slug?: string;
}
