import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import db from '../common/repository';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [];

    findAll(): Item[] {
        return this.items;
    }

    create(item: Item) {
        console.log('CREATE ITEM');
        db.collection('items').doc(item.name).set(item);
    }
}
