import {Injectable} from '@nestjs/common';
import db from '../common/repository';
import {ItemModel} from './item.model';

@Injectable()
export class ItemsService {

    private readonly collection: string = 'items';

    getByEmail(email: string): Promise<ItemModel> {
        return db.collection(this.collection).doc(email).get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                    return null;
                } else {
                    return doc.data();
                }
            })
            .catch(err => {
                console.log('Error getting documents', err);
                return null;
            });
    }

    create(item: ItemModel) {
        db.collection('items').doc(item.name).set(item);
    }
}
