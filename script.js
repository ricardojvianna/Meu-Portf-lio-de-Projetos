let formulario = document.querySelector(".talk-me")
let mascara = document.querySelector(".mascara-form")
let tela = document.querySelector(".tela")

function aparecerFormulario () {
    formulario.style.left = "600px"
    mascara.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}

function sairFormulario() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}

tela.addEventListener("click", sairFormulario())