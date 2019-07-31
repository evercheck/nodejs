import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateCatDto, UpdateCatDto} from './dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

/*
    @Get(':id')
    findOne(@Param('id') id): string {
        return `this action return a #${id} cat`;
    }
*/

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `this action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `this action remove a #${id} cat`;
    }

}
