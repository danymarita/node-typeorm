import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Todo from "./Todo";

@Entity()
export default class Author{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string = '';

    @OneToMany(() => Todo, (todo) => todo.author)
    public todos: Todo[]
}