document.querySelector("#mais").addEventListener("click", addModal);
document.querySelector("#modalX").addEventListener("click", closeModal);
// document.querySelector("#salvar").addEventListener("click", closeModal);

const form = document.querySelector('#form');
const data = document.querySelector("#data");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto")

form.addEventListener('submit', function(e){
    console.log(data.value)
    console.log(titulo.value)
    console.log(texto.value)
    
    e.preventDefault();
})

function addModal(){
    document.querySelector("#modal").classList.remove("transparente")
}

function closeModal(){
    document.querySelector("#modal").classList.add("transparente")
}