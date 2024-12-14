import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Min(2)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @Min(2)
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Min(4)
  password: string;
}
