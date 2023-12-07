import { beforeEach, describe, expect, it} from 'vitest'
import { ToDoRepository } from '../repositories/ToDoRepository'
import { InMemoryToDo } from '../../database/repositories/InMemoryToDo'
import { CreatedToDo } from './CreatedToDo'

let toDoRepository: ToDoRepository
let sut: CreatedToDo
describe('Create a new to do', () => {
    beforeEach(() => {
        toDoRepository = new InMemoryToDo()
        sut = new CreatedToDo(toDoRepository)
    })
    it('should be possible created a new to do', async () => {
        const todo = await sut.create({
            mes: 'setembro',
            dia: '10',
            titulo: 'Nova Atividade',
            descricao: ''
        })
        await expect(todo.id).toEqual(expect.any(String))
    })
})