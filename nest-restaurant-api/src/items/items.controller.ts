import { Controller, Get, Post, Body, UsePipes, UseGuards, Param, Delete, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateItemDTO } from './create-item.dto';
import { AdminGuard } from '../common/admin.guard';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    /**
     * Get all items for an email
     * @param email 
     */
    @Get()
    async find(@Query('email') email: string): Promise<Item[]> {
        return this.itemsService.find(email);
    }

    @Post()
    async saveItem(@Body() item: Item) {
        return this.itemsService.saveItem(item);
    }

    /**
     * Delete item with id
     * @param params Include id of deleted item
     */
    @Delete(':id')
    async delete(@Param() params) {
        this.itemsService.delete(params.id);
    }

    /*     @Get()
        async findAll(): Promise<Item[]> {
            return this.itemsService.findAll();
        }
    
        @Post()
        @UseGuards(new AdminGuard())
        @UsePipes(new ValidationPipe())
        async create(@Body() createItemDTO: CreateItemDTO) {
            this.itemsService.create(createItemDTO);
        } */

}
