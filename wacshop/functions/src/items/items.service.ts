import {Injectable} from '@nestjs/common';
import db from '../common/repository';
import {ItemModel} from './item.model';
import {collections} from '../common/collections';
import {plainToClass} from 'class-transformer';

@Injectable()
export class ItemsService {

    private readonly collection: string = 'items';

    getById(id: string): Promise<ItemModel> {
        return db.collection(this.collection).doc(id).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                    return null;
                } else {
                    return ({
                        id: doc.id,
                        name: doc.data().name,
                        price: doc.data().price
                    });
                }
            })
            .catch(err => {
                console.log('Error getting documents', err);
                return null;
            });
    }

    create(item: ItemModel) {
        // db.collection(this.collection).doc(item.name).set(item);
        db.collection(this.collection).add(item)
            .then(ref => {
                console.log('Added document with ID: ', ref.id);
            });
    }

    update(item: ItemModel) {
        db.collection(this.collection).doc(item.id).set({
            name: item.name,
            price: item.price
        });
    }

    getAllByUserId(userId: string): Promise<ItemModel> {
        const itemsCol = db.collection(collections.items);
        const usersCol = db.collection(collections.users);
        return itemsCol.doc(userId).get()
            .then(doc => {
                const user: ItemModel = plainToClass(ItemModel, doc.data());
                return user;
            });
    }

    getItemsByUserId(userId: string): Promise<ItemModel[]> {
        const itemsCol = db.collection(collections.items);
        const items: ItemModel[] = [];

        return itemsCol.where('userId', '==', userId).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching document.');
                    return null;
                } else {
                    snapshot.forEach(doc => {
                        console.log('Found item: ', doc.data());
                        items.push(plainToClass(ItemModel, doc.data()));
                    });
                    return items;
                }
            }).catch(err => {
                console.log('Error getting documents', err);
                return null;
            });
    }
}
