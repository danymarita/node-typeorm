import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import Todo from "./Todo";

@Entity()
export default class Category{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string = '';

    @ManyToMany(() => Todo, (todo) => todo.categories)
    public todos: Todo[];
}