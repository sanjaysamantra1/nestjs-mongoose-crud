import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    // Create a new user
    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    // Find all users
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    // Find a user by ID
    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    // Update a user by ID
    async update(id: string, createUserDto: CreateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, createUserDto, { new: true }).exec();
    }

    // Delete a user by ID
    async delete(id: string): Promise<any> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}