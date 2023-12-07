import { beforeEach, describe, expect, it} from 'vitest'
import { ToDoRepository } from '../repositories/ToDoRepository'
import { InMemoryToDo } from '../../database/repositories/InMemoryToDo'
import { DeletToDo } from './DeletToDo'
import { Todo } from '../entites/ToDo'

let toDoRepository: ToDoRepository
let sut: DeletToDo
describe('Delet a to do', () => {
    beforeEach(() => {
        toDoRepository = new InMemoryToDo()
        sut = new DeletToDo(toDoRepository)
    })
    it('should be possible delet a to do', async () => {
        const crear = new Todo({
            mes: 'setembro',
            dia: '10',
            titulo: 'Nova Atividade',
            descricao: ''
        })

        await toDoRepository.created(crear)

        const id = crear.id

        const todo = await sut.delet({id})

        await expect(todo).toEqual(expect.any(String))
    })
})