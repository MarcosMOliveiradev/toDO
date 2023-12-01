import { criarTarefa } from "./cirateLista.js";

document.querySelector("#mais").addEventListener("click", addModal);
document.querySelector("#modalX").addEventListener("click", closeModal);
// document.querySelector("#salvar").addEventListener("click", closeModal);
const form = document.getElementById('form')


form.addEventListener('submit', async function(e){
    const tb = document.getElementById("tb")
    const data = document.getElementById("data").value
    const titulo = document.getElementById("titulo").value
    const texto = document.getElementById("texto").value
    const newData = data.split(" ")
    const dataTarefa = newData[1]
    const paragrafo = newData[0]
    const id = 1

    const newTabela = await criarTarefa(dataTarefa, paragrafo, titulo, texto, id)
    tb.appendChild(newTabela)
    
    e.preventDefault();
})

function addModal(){
    document.querySelector("#modal").classList.remove("transparente")
}

function closeModal(){
    document.querySelector("#modal").classList.add("transparente")
}

const deletar = document.querySelectorAll("button")


function delet() {
    deletar.forEach((e) => {
        e.addEventListener('click', async () => {
            console.log("ola")
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