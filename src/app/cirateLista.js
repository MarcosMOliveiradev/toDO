export async function criarTarefa(dataTarefa, paragrafoTarefa, tituloTarefa, descricao, id) {
    const tabela = document.createElement("tr")
    const linhaData = document.createElement("td")
    const linhaTitulo = document.createElement("td")
    const linhaDescricao = document.createElement("td")
    const linhaButton = document.createElement("td")
    const span = document.createElement("span")
    const paragrafo = document.createElement("p")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")

    tabela.id = id

    linhaData.classList = "data"

    span.textContent = dataTarefa
    paragrafo.textContent = paragrafoTarefa

    h2.textContent = tituloTarefa
    linhaTitulo.appendChild(h2)

    linhaDescricao.classList = "descricao"

    linhaDescricao.textContent = descricao


    button.textContent = "X"

    linhaButton.appendChild(button)

    linhaData.appendChild(span)
    linhaData.appendChild(paragrafo)


    tabela.appendChild(linhaData)
    tabela.appendChild(linhaTitulo)
    tabela.appendChild(linhaDescricao)
    tabela.appendChild(linhaButton)

    return tabela
}