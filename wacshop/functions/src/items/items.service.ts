import {Injectable} from '@nestjs/common';
import {Item} from './item.interface';
import db from '../common/repository';

@Injectable()
export class ItemsService {

    private readonly collection: string = 'items';

    getByEmail(email: string): Promise<Item> {
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

    create(item: Item) {
        db.collection('items').doc(item.name).set(item);
    }
}
