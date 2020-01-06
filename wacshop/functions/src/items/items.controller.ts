import {Controller, Get, Post, Body, UsePipes, Param} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get(':email')
    async getByEmail(@Param('email') email: string): Promise<Item> {
        return this.itemsService.getByEmail(email);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: CreateItemDto) {
        this.itemsService.create(createItemDto);
    }
}
