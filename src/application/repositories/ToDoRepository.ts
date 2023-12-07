import { Todo } from "../entites/ToDo";

export abstract class ToDoRepository {
    abstract created(todo: Todo): Promise<Todo>
    abstract list(): Promise<Todo>
    abstract id(id: string): Promise<any | null>
    abstract delet(id: string): Promise<void>
}