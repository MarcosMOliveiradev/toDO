import { criarTarefa } from './cirateLista.js'

export async function cria() {
    try {
        const response = await fetch('http://192.168.0.64:3131/todo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const listToDo = await response.json()
        
        await listToDo.forEach(async (e) => {
            const mes = e.mes
            const dia = e.dia
            const titulo = e.titulo
            const descricao = e.descricao
            const id = e.id

            const newToDoList = await criarTarefa(mes, dia, titulo, descricao, id)
            await tb.appendChild(newToDoList)

            const button = document.querySelectorAll('button')

            button.forEach((e) => {
                e.addEventListener('click', async () => {
                    const trElement = e.closest('tr');
                    if (trElement) {
                        const id = trElement.id
                
                        const remove = document.getElementById(id);
                        if (remove) {
                            remove.parentElement.removeChild(remove);
                        }
                    }
                })
            })
        })
    } catch(err) {
        throw err
    }
}