import {Injectable} from '@nestjs/common';
import db from '../common/repository';
import {ItemModel} from './item.model';

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
}
