const boton = document.getElementById('btn')

boton.addEventListener('click', (event) => {
    event.preventDefault()

    const nombre = document.getElementById('input').value

    const parrafo = document.getElementById('nombreEmpresa')

    parrafo.textContent = nombre
})