import {Injectable} from '@nestjs/common';
import {UserModel} from './user.model';
import db from '../common/repository';

@Injectable()
export class UsersService {
    private readonly collection: string = 'users';

    create(userModel: UserModel) {
        db.collection(this.collection).add(userModel)
            .then(ref => {
                console.log('Added document with ID: ', ref.id);
            });
    }

}
