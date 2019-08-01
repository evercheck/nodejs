import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CatsModule} from './cats/cats.module';
import {CatsController} from './cats/cats.controller';
import {logger} from './logger.middleware';
import {APP_FILTER} from '@nestjs/core';
import {HttpExceptionFilter} from './http-exception.filter';

@Module({
    imports: [CatsModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
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
