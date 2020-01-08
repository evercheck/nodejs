import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import {ItemsService} from './items.service';
import {ValidationPipe} from '../common/validation.pipe';
import {ItemModel} from './item.model';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {
    }

    @Get(':email')
    async getByEmail(@Param('email') email: string): Promise<ItemModel> {
        return this.itemsService.getByEmail(email);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: ItemModel) {
        this.itemsService.create(createItemDto);
    }
}
