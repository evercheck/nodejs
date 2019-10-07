import { IsInt, IsString } from "class-validator";

export class CreateItemDTO {

    @IsString() readonly name: string;

    @IsInt() readonly price: number;
}