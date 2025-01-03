let formulario = document.querySelector(".talk-me")
let mascara = document.querySelector(".mascara-form")
let botaoEmail = document.querySelector(".button-about")


function aparecerFormulario () {
    formulario.style.left = "600px"
    mascara.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}

window.document.addEventListener('click', (event) => {
    if (!formulario.contains(event.target) && event.target !== botaoEmail) {
        formulario.style.left = ("-320px")
        mascara.style.visibility = ("hidden") 
    }
})

