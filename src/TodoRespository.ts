import {AbstractRepository, EntityRepository, FindConditions} from 'typeorm';
import Todo from './entity/Todo';

const OFFSET = 7;
const PREFIX = 'prefix_';

@EntityRepository(Todo)
export default class TodoRepository extends AbstractRepository<Todo> {
    public save(todo: Todo): Promise<Todo> {
        todo.persistedName = `${PREFIX}${todo.name}`;
        return this.manager.save(todo);
    }

    public find(conditions?: FindConditions<Todo>): Promise<Todo[]> {
        return this.repository.find({
            // Caching using redis
            cache: true,
            relations: ['metadata', 'author', 'categories'],
            where: conditions
        })
        .then((todos) => {
            return todos.map((todo) => {
                todo.name = todo.persistedName.slice(OFFSET);
                return todo;
            });
        });
    }

    public findIncomplete(): Promise<Todo[]> {
        return this.repository.createQueryBuilder('todo')
        .innerJoinAndSelect('todo.metadata', 'metadata')
        .innerJoinAndSelect('todo.author', 'author')
        .innerJoinAndSelect('todo.categories', 'category')
        .where('todo.isComplete = :value', {value: false})
        .cache(true) // Caching using redis
        .getMany().then((todos) => {
            return todos.map((todo) => {
                todo.name = todo.persistedName.slice(OFFSET);
                return todo;
            });
        });
    }
}