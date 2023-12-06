import { criarTarefa } from "./cirateLista.js";

document.querySelector("#mais").addEventListener("click", addModal);
document.querySelector("#modalX").addEventListener("click", closeModal);
// document.querySelector("#salvar").addEventListener("click", closeModal);
const form = document.getElementById('form')

const tb = document.getElementById("tb")

form.addEventListener('submit', async function(e){
    const data = document.getElementById("data").value
    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("texto").value
    const newData = data.split(" ")
    const dia = newData[0]
    const mes = newData[1]

    try {
        const response = await fetch('http://192.168.0.64:3131/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mes, dia, titulo, descricao})
        })

        console.log(response)
    }catch(err) {
        throw err
    }


    e.preventDefault();
})

function cria() {
    // newTodo.forEach(async (e) => {
    //     const newTabela = await criarTarefa(e.mes, e.dia, e.titulo, e.descricao, e.id)
    //     tb.appendChild(newTabela)
    // })
}

cria()

function addModal(){
    document.querySelector("#modal").classList.remove("transparente")
}

function closeModal(){
    document.querySelector("#modal").classList.add("transparente")
}

const deletar = document.querySelectorAll("button")


async function delet() {
    deletar.forEach((e) => {
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
}

await delet()