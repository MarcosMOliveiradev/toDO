import { beforeEach, describe, expect, it} from 'vitest'
import { ToDoRepository } from '../repositories/ToDoRepository'
import { InMemoryToDo } from '../../database/repositories/InMemoryToDo'
import { ListToDo } from './ListToDO'
import { Todo } from '../entites/ToDo'

let toDoRepository: ToDoRepository
let sut: ListToDo
describe('create a new todo', () => {
    beforeEach(() => {
        toDoRepository = new InMemoryToDo()
        sut = new ListToDo(toDoRepository)
    })
    it('should be possible list a to do', async () => {
        const crear = new Todo({
            mes: 'setembro',
            dia: '10',
            titulo: 'Nova Atividade',
            descricao: ''
        })
        await toDoRepository.created(crear)

        const crear2 = new Todo({
            mes: 'setembro',
            dia: '10',
            titulo: 'Nova Atividade',
            descricao: ''
        })
        await toDoRepository.created(crear2)

        const toDo = await sut.List()
        console.log(toDo)
        await expect(toDo.id).toEqual(expect.any(String))
    })
})