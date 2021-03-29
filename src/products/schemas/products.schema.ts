import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 10})
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActive: boolean;
}
