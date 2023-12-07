import { ToDoRepository } from "../repositories/ToDoRepository"

interface IToDoRequest {
    id: string
}

export class DeletToDo{
    constructor(private toDoRepository: ToDoRepository){}

    async delet(request: IToDoRequest){
        const { id } = request

        const idExist = await this.toDoRepository.id(id)

        if(idExist === null) {
            throw new Error('Invalid Id')
        }

        await this.toDoRepository.delet(idExist.id)

        return 'Deletado!'
    }
}