import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersReponsitory: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersReponsitory.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersReponsitory.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        })
    }

    async updateUser(user: User) {
        this.usersReponsitory.save(user);
    }

    async deleteUser(user: User) {
        this.usersReponsitory.delete(user);
    }
}
