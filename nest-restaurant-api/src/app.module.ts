import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, ItemsModule],
  controllers: [ShoppingCartController],
})

export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        // { path: '/items', method: RequestMethod.POST },
        { path: '/shopping-cart', method: RequestMethod.POST },
      );
  }
}
