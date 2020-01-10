import {IsArray, IsEmail} from 'class-validator';

export class UserModel {
    @IsEmail() readonly email: string;
    @IsArray() readonly items: string[];
}
