import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Item) private readonly itemsRepository: Repository<Item>) { }

    async find(_email: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            email: _email
        });
    }

    async saveItem(item: Item) {
        this.itemsRepository.save(item);
    }

    async delete(_id: number) {
        return await this.itemsRepository.delete({
            id: _id
        });
    }
}
