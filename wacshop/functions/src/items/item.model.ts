import { IsString, IsInt } from 'class-validator';
export class ItemModel {

    @IsString() readonly name: string;

    @IsInt() readonly price: number;
}
