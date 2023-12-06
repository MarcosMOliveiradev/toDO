import { Todo } from "../entites/ToDo";
import { ToDoRepository } from "../repositories/ToDoRepository";

interface IToDoRequest {
    mes: string
    dia: string
    titulo: string
    descricao: string
}

interface IToDoResponse {
    toDo: Todo
}

export class CreatedToDo {
    constructor(private toDoRepository: ToDoRepository){}

    async create(request: IToDoRequest): Promise<IToDoResponse> {
        const { mes, dia, titulo, descricao } = request

        const ToDo = new Todo({
            mes,
            dia,
            titulo,
            descricao
        })

        const toDo = await this.toDoRepository.created(ToDo)

        return toDo
    }
}