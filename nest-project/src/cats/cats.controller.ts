import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {CreateCatDto, UpdateCatDto, ListAllEntities} from './dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json(['selebum']);
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
