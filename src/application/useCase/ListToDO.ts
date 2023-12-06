import { ToDoRepository } from "../repositories/ToDoRepository";

export class ListToDo {
    constructor(private toDoRepository: ToDoRepository){}
    async List(){
        const toDo = this.toDoRepository.list()

        return toDo
    }
}