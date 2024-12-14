import { IsMongoId, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsMongoId()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsString()
  slug: string;
}
