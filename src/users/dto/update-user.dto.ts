import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @Min(2)
  first_name?: string;

  @IsString()
  @Min(2)
  last_name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @Min(4)
  password?: string;
}
