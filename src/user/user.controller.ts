import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // Create a new user
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    // Get all users
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    // Get a user by ID
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    // Update a user by ID
    @Patch(':id')
    async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.update(id, createUserDto);
    }

    // Delete a user by ID
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}