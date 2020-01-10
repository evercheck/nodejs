import {Body, Controller, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import {ItemsService} from './items.service';
import {ValidationPipe} from '../common/validation.pipe';
import {ItemModel} from './item.model';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<ItemModel[]> {
        return this.itemsService.getItemsByUserId(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: ItemModel) {
        this.itemsService.create(createItemDto);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() updateItemDto: ItemModel) {
        this.itemsService.update(updateItemDto);
    }
}
