const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAgregar= document.querySelector('.btn')

/* guardar en localStorage */
const listado = document.querySelector('.listado')
const ls = window.localStorage


btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
        
    } 
    console.log(contacto)
   guardarContacto(ls, contacto)
}
cargarContactos(ls, listado)