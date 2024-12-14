import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.userModel.create(createUserDto);
    return data;
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(@Param() id: number) {
    const data = await this.userModel.findById(id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  async update(@Param() id: number, @Body() updateUserDto: UpdateUserDto) {
    const data = this.userModel.findByIdAndUpdate(id, updateUserDto);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  async remove(@Param() id: number) {
    const data = this.userModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }
}
