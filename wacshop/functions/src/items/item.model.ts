import {IsInt, IsString} from 'class-validator';

export class ItemModel {

    @IsString() readonly id: string;
    @IsString() readonly name: string;
    @IsInt() readonly price: number;
}
