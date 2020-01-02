import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { Repository } from '../common/repository';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [];
    private readonly db: Firestore;

    constructor() {
        admin.initializeApp(functions.config().firebase);
        this.db = admin.firestore();
    }

    findAll(): Item[] {
        return this.items;
    }

    create(item: Item) {
        console.log('KHOA: CREATE ITEM');
        this.db.collection('items').doc(item.name).set(item);
    }
}
