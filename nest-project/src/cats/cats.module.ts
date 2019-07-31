import {Global, Module} from '@nestjs/common';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService],

    // Module re-exporting: making it available for the other modules which import this one
    imports: [CatsService],
    // Shared modules: Now any module that import CatsModule has access CatsService
    // and will share the same instance with all other modules that import it as well
    exports: [CatsService],
})
export class CatsModule {
    constructor(private readonly catsService: CatsService) {}
}
