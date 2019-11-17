import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class TodoMetadata{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public comment: string = '';
}