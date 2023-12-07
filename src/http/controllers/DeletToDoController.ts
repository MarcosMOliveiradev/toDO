import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { DeletToDo } from "../../application/useCase/DeletToDo";

export class DeletToDoController {
    constructor(private deletToDo: DeletToDo){}

    async exec(request: FastifyRequest, reply: FastifyReply){
        const idSchema = z.object({
            id: z.string()
        })

        const { id } = idSchema.parse(request.params)

        const response = await this.deletToDo.delet({id})

        console.log(response)

        return reply.status(201).send(response)
    }
}