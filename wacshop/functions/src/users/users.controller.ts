import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ValidationPipe} from '../common/validation.pipe';
import {UserModel} from './user.model';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userModel: UserModel) {
        this.usersService.create(userModel);
    }
}
