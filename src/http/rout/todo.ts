import { FastifyInstance } from "fastify";
import { PrismaToDoRepository } from "../../database/repositories/PrismaToDoRepository";
import { CreateToDoController } from "../controllers/CreateToDoController";
import { CreatedToDo } from "../../application/useCase/CreatedToDo";
import { ListToDo } from "../../application/useCase/ListToDO";
import { ListToDOController } from "../controllers/ListToDoController";

const repositories = new PrismaToDoRepository()

// usecase
const createdToDo = new CreatedToDo(repositories)
const List = new ListToDo(repositories)

// controller
const createToDoController = new CreateToDoController(createdToDo)
const listController = new ListToDOController(List)

export async function toDo(app: FastifyInstance) {
    app.post('/', async (request, replay) => {
        return createToDoController.exec(request, replay)
    })

    app.get('/', async (request, replay) => {
        return listController.ListController(request, replay)
    })
}