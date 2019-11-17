import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import Todo from '../entity/Todo';

@EventSubscriber()
export class TodoEventSubscriber implements EntitySubscriberInterface<Todo>{
    listenTo(){
        return Todo;
    }
    // Fired after insert todo table
    afterInsert(event: InsertEvent<Todo>){
        console.log(`Insert todo with ID: ${event.entity.id}`)
    }
}