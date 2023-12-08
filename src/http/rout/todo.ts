import { FastifyInstance } from "fastify";
import { PrismaToDoRepository } from "../../database/repositories/PrismaToDoRepository";
import { CreateToDoController } from "../controllers/CreateToDoController";
import { CreatedToDo } from "../../application/useCase/CreatedToDo";
import { ListToDo } from "../../application/useCase/ListToDO";
import { ListToDOController } from "../controllers/ListToDoController";
import { DeletToDo } from "../../application/useCase/DeletToDo";
import { DeletToDoController } from "../controllers/DeletToDoController";

const repositories = new PrismaToDoRepository()

// usecase
const createdToDo = new CreatedToDo(repositories)
const List = new ListToDo(repositories)
const delet = new DeletToDo(repositories)
// controller
const createToDoController = new CreateToDoController(createdToDo)
const listController = new ListToDOController(List)
const deletController = new DeletToDoController(delet)

export async function toDo(app: FastifyInstance) {
    app.post('/', async (request, reply) => {
        return createToDoController.exec(request, reply)
    })

    app.get('/', async (request, reply) => {
        return listController.ListController(request, reply)
    })
    app.delete('/:id', async (request, reply) => {
        return deletController.exec(request, reply)
    })

    app.get('/index', (request, reply) => {
        reply.view('./src/index.html', { page: 'index' })
    })
}