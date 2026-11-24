const input = document.getElementById("input")
const btn = document.getElementById("btn")
const resposta = document.getElementById("resposta")

btn.addEventListener("click" , async function (event) {
    event.preventDefault()

    const value = input.value

    const resp = await fetch(`https://viacep.com.br/ws/${value}/json`)

    if(!resp.ok){
        resposta.textContent= "erro encontrado"

    }
    const data =await resp.json()

    console.log(data)


})