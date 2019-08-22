import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {AllExceptionsFilter} from './all-exceptions.filter';
import {ValidationPipe} from './validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    // Bind middleware for every router at once
    // app.use(logger);

    const {httpAdapter} = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
