import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put, SetMetadata,
    UseFilters, UseGuards,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {CreateCatDto, UpdateCatDto} from './dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {ForbiddenException} from '../forbidden.exception';
import {HttpExceptionFilter} from '../http-exception.filter';
import {ParseIntPipe} from '../parse-int.pipe';
import {RolesGuard} from '../roles.guard';
import {Roles} from '../roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    // @UsePipes(new JoiValidationPipe(CreateCatDto))
    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    // @SetMetadata('roles', ['admin'])
    @Roles('admin')
    @UseFilters(HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id) {
        // async findOne(@Param('id', new ParseUUIDPipe()) id) {
        return await this.catsService.findOne(id);
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
