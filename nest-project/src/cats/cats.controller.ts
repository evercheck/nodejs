import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseFilters} from '@nestjs/common';
import {CreateCatDto, UpdateCatDto} from './dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {ForbiddenException} from '../forbidden.exception';
import {HttpExceptionFilter} from '../http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Post()
    @UseFilters(HttpExceptionFilter)
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
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'Custom error message',
        }, HttpStatus.FORBIDDEN);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `this action remove a #${id} cat`;
        throw new ForbiddenException();
    }

}
