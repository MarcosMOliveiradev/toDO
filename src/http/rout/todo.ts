import { FastifyInstance } from "fastify";
import { PrismaToDoRepository } from "../../database/repositories/PrismaToDoRepository";
import { CreateToDoController } from "../controllers/CreateToDoController";
import { CreatedToDo } from "../../application/useCase/CreatedToDo";

const repositories = new PrismaToDoRepository()
const createdToDo = new CreatedToDo(repositories)
const createToDoController = new CreateToDoController(createdToDo)

export async function toDo(app: FastifyInstance) {
    app.post('/', async (request, replay) => {
        return createToDoController.exec(request, replay)
    })
}