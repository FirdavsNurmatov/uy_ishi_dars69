import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const data = new this.postModel(createPostDto);
    await data.save();
    return data;
  }

  async findAll() {
    const allData = await this.postModel.find();
    return allData;
  }

  async findOne(id: string) {
    const data = await this.postModel.findById(id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const data = await this.postModel.findByIdAndUpdate(id, updatePostDto);
    if (!data) {
      throw new NotFoundException();
    }
    return { message: 'Updated.', data: data };
  }

  async remove(id: string) {
    const data = await this.postModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException();
    }
    return { message: 'Deleted.', data: data };
  }
}
