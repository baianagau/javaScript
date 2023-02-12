const ls = window.localStorage;
const listado = document.querySelector('.listado');

const guardarContacto = (contacto) => {
  ls.setItem(contacto.id, JSON.stringify(contacto));
};

const cargarContactos = () => {
  let claves = Object.keys(ls)
  for (clave of claves) {
    let contacto = JSON.parse(ls.getItem(clave))
    crearContacto(contacto);
  };
};

const crearContacto = (contacto) => {
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
    Swal.fire("Contacto eliminado")
    .then(()=>window.location.href = 'http://127.0.0.1:5500/preEntrega-gau/index.html'
    )
    
  }

  divContacto.appendChild(nombreContacto)
  divContacto.appendChild(numeroContacto)
  divContacto.appendChild(direccionContacto)
  divContacto.appendChild(icono)
  listado.appendChild(divContacto)
}