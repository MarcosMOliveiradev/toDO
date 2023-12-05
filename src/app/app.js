import { criarTarefa } from "./cirateLista.js";

function toDo(id, diaAtividade, mesAtividade, tituloAtividade, descricaoAtividade) {
    this.id = id,
    this.dia = diaAtividade,
    this.mes = mesAtividade,
    this.titulo = tituloAtividade,
    this.descricao = descricaoAtividade
}
const newTodo = []

document.querySelector("#mais").addEventListener("click", addModal);
document.querySelector("#modalX").addEventListener("click", closeModal);
// document.querySelector("#salvar").addEventListener("click", closeModal);
const form = document.getElementById('form')

const tb = document.getElementById("tb")

form.addEventListener('submit', async function(e){
    const data = document.getElementById("data").value
    const titulo = document.getElementById("titulo").value
    const texto = document.getElementById("texto").value
    const newData = data.split(" ")
    const diaTarefa = newData[0]
    const mesTarefa = newData[1]
    const id = 1
    const novoToDo = new toDo(id, diaTarefa, mesTarefa, titulo, texto)


    e.preventDefault();
})

function cria() {
    newTodo.forEach(async (e) => {
        console.log(e)
        const newTabela = await criarTarefa(e.mes, e.dia, e.titulo, e.descricao, e.id)
        tb.appendChild(newTabela)
    })
}

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
            console.log(trElement)
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