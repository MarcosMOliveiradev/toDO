import { FastifyReply, FastifyRequest } from "fastify";
import { ListToDo } from "../../application/useCase/ListToDO";

export class ListToDOController {
    constructor(private toDoList: ListToDo){}
    async ListController(request: FastifyRequest, reply: FastifyReply){
        const response = await this.toDoList.List()

        return response
    }
}