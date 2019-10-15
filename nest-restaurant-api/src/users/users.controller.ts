import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get(':id')
    getUser(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get()
    getAllUsers() {
        return this.service.getUsers();
    }

    @Post()
    createUser(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Put()
    updateUser(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}