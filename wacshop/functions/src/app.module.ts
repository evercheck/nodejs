import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ItemsModule, UsersModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule { }
