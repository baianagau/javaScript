const guardarContacto = (ls, contacto) => {
  ls.setItem(contacto.id, JSON.stringify(contacto))
  // window.location.href = 'http://127.0.0.1:5500/preEntrega-gau/index.html'

}
const cargarContactos = (ls, parentNode) => {
  let claves = Object.keys(ls)
  console.log(claves)
  for (clave of claves) {
    let contacto = JSON.parse(ls.getItem(clave))
    crearContacto(parentNode, contacto, ls)
  }
}

const crearContacto = (parentNode, contacto, ls) => {
  let divContacto = document.createElement('div')
  let nombreContacto = document.createElement('h3')
  let numeroContacto = document.createElement('p')
  let direccionContacto = document.createElement('p')
  let icono = document.createElement('span')

  nombreContacto.innerHTML = contacto.nombre
  numeroContacto.innerHTML = contacto.numero
  direccionContacto.innerHTML = contacto.direccion
  icono.innerHTML = 'delete'

  divContacto.classList.add('contacto')
  icono.classList.add('material-symbols-outlined')

  icono.onclick = () => {
    ls.removeItem(contacto.id)
    window.location.href = 'http://127.0.0.1:5500/preEntrega-gau/index.html'
  }

  divContacto.appendChild(nombreContacto)
  divContacto.appendChild(numeroContacto)
  divContacto.appendChild(direccionContacto)
  divContacto.appendChild(icono)

  parentNode.appendChild(divContacto)
}