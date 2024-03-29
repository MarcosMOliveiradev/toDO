import { Todo } from "../../application/entites/ToDo";
import { ToDoRepository } from "../../application/repositories/ToDoRepository";
import { prisma } from "../prisma";

export class PrismaToDoRepository extends ToDoRepository{
    async id(id: string): Promise<any | null> {
        const exist = await prisma.todo.findUnique({
            where: {
                id
            }
        })

        if(exist === null) {
            throw new Error('Invalid Id')
        }
        return exist
    }

    async delet(id: string): Promise<void> {
        await prisma.todo.delete({
            where: {
                id
            }
        })
    }

    async list(): Promise<any> {
        const Todo = await prisma.todo.findMany()

        return Todo
    }
    async created(todo: Todo): Promise<any> {
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