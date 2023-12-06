import { Todo } from "../../application/entites/ToDo";
import { ToDoRepository } from "../../application/repositories/ToDoRepository";

export class InMemoryToDo extends ToDoRepository{
    public item: Todo[] = []

    async created(todo: Todo) {
        const create: Todo = {
            id: todo.id,
            mes: todo.mes,
            dia: todo.dia,
            titulo: todo.titulo,
            descricao: todo.descricao,
            createdAt: new Date(),
        }

        this.item.push(create)
        return create
    }

}