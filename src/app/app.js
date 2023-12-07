import { env_api } from "./env.js";
import { cria } from "./listarAfazeres.js";

document.querySelector("#mais").addEventListener("click", addModal);
document.querySelector("#modalX").addEventListener("click", closeModal);
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
        env_api
        await fetch(`${env_api}/todo/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mes, dia, titulo, descricao})
        })
    }catch(err) {
        throw err
    }


    e.preventDefault();
})

cria()

function addModal(){
    document.querySelector("#modal").classList.remove("transparente")
}

function closeModal(){
    document.querySelector("#modal").classList.add("transparente")
}
