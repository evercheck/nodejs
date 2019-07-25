import {Body, Controller, Delete, Get, Param, Post, Put, Query, Req} from '@nestjs/common';
import {Request} from 'express';
import {CreateCatDto, UpdateCatDto, ListAllEntities} from './dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'this action adds a new cat';
    }

    @Get()
    findAll(@Query() query: ListAllEntities): string {
        return `this action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `this action return a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `this action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `this action remove a #${id} cat`;
    }
}
