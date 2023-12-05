import { describe, expect, it} from 'vitest'
import { ToDoRepository } from '../repositories/ToDoRepository'
import { Todo } from '../entites/ToDo'

let toDoRepository: ToDoRepository
let sut: Todo
describe('create a new todo', () => {
    it('should be possible created a new to do', async () => {
        const {todo} = await sut.createdAt({
            mes: 'setembro',
            dia: '10',
            titulo: 'Nova Atividade',
            descricao: ''
        })

        await expect(todo.id).toEqual(expect.any(String))
    })
})