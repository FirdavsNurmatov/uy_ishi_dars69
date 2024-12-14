import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './entities/comment.entity';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel(createCommentDto);
    await newComment.save();
    return { message: 'Created.', data: newComment };
  }

  async findAll() {
    const allComments = await this.commentModel.find();
    return allComments;
  }

  async findOne(id: string) {
    const data = await this.commentModel.findById(id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const data = await this.commentModel.findByIdAndUpdate(
      id,
      updateCommentDto,
    );
    if (!data) {
      throw new NotFoundException();
    }
    return { message: 'Updated.', data: data };
  }

  async remove(id: string) {
    const data = await this.commentModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException();
    }
    return { message: 'Deleted.', data: data };
  }
}
