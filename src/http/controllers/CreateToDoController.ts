import { FastifyReply, FastifyRequest } from "fastify";
import { CreatedToDo } from "../../application/useCase/CreatedToDo";
import { z } from "zod";

export class CreateToDoController {
    constructor(private createdToDO: CreatedToDo){}
    async exec(request: FastifyRequest, reply: FastifyReply){
        const CreateToDoschema = z.object({
            mes: z.string(),
            dia: z.string(),
            titulo: z.string(),
            descricao: z.string(),
        })
        const { mes, dia, titulo, descricao } = CreateToDoschema.parse(request.body)

        try {
            await this.createdToDO.create({
                mes,
                dia,
                titulo,
                descricao,
            })
        }catch (err) {
            return reply.status(500).send(err)
        }

        return reply.status(201).send('Criado Com sucesso!')
    }
}