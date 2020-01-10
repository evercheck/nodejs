import {IsInt, IsString, IsUrl} from 'class-validator';

export class ItemModel {

    @IsString() readonly id: string;
    @IsString() readonly userId: string;
    @IsString() readonly name: string;
    @IsString() readonly description: string;
    @IsInt() readonly retailPrice: number;
    @IsInt() readonly price: number;
    @IsString() readonly image: string;
    @IsUrl() readonly url;
}
