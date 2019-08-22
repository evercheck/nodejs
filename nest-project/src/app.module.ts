import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CatsModule} from './cats/cats.module';
import {CatsController} from './cats/cats.controller';
import {logger} from './logger.middleware';
import {APP_FILTER, APP_PIPE} from '@nestjs/core';
import {HttpExceptionFilter} from './http-exception.filter';
import {ValidationPipe} from './validation.pipe';

@Module({
    imports: [CatsModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(logger)
            .exclude(
                {path: 'cats', method: RequestMethod.GET},
                {path: 'cats', method: RequestMethod.DELETE},
            ).forRoutes(CatsController);
    }
}
