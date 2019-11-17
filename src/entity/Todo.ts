import { Column, Entity, PrimaryGeneratedColumn, Index, AfterInsert, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Length, Validate } from 'class-validator';
import CapitalLetterValidator, {} from '../CapitalLetterValidator';
import TodoMetadata from './TodoMetadata';
import Author from './Author';
import Category from './Category';

@Entity()
export default class Todo {
    @PrimaryGeneratedColumn()
    public id: number;

    @Length(0, 10)
    // Using custom validator
    @Validate(CapitalLetterValidator)
    public name: string = '';
    @Column('varchar', {
        name: 'name',
        nullable: false,
      })
    public persistedName: string = '';

    @Index()
    @Column()
    public isComplete: boolean = false;

    // @AfterInsert()
    // public handleAfterInsert() {
    //     console.log(`Insert todo with ID: ${this.id}`)
    // }

    @OneToOne(() => TodoMetadata)
    @JoinColumn()
    public metadata: TodoMetadata

    @Index()
    @ManyToOne(() => Author, (author) => author.todos)
    public author: Author;

    @ManyToMany(() => Category, (category) => category.todos)
    @JoinTable()
    public categories: Category[];
}