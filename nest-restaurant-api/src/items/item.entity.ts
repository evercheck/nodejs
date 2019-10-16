import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    brand: string;

    @Column('text')
    name: string;

    @Column('int')
    price: number;

    @Column('int')
    salePrice: number;

    @Column('text')
    imageUrl: string;

    @Column('text')
    url: string;
}