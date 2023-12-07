import { Todo } from "../entites/ToDo";

export abstract class ToDoRepository {
    abstract created(todo: Todo): Promise<any>
    abstract list(): Promise<any>
    abstract id(id: string): Promise<any | null>
    abstract delet(id: string): Promise<void>
}