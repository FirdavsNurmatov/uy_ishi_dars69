import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsMongoId()
  user_id: string;

  @IsNotEmpty()
  @IsMongoId()
  post_id: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
