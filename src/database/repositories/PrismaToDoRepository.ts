import { Todo } from "../../application/entites/ToDo";
import { ToDoRepository } from "../../application/repositories/ToDoRepository";
import { prisma } from "../prisma";

export class PrismaToDoRepository extends ToDoRepository{
    async created(todo: Todo) {
        const create = await prisma.todo.create({
            data: {
                id: todo.id,
                mes: todo.mes,
                dia: todo.dia,
                titulo: todo.titulo,
                descricao: todo.descricao,
                createdAt: todo.createdAt,
            }
        })

        return create
    }
}