const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregar = document.querySelector('.btn');

const addContact = () => {
    return Promise.resolve( btnAgregar.onclick = () => {
        let contacto = {
            id: Math.random(1, 100),
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value,
        }
        if(contacto.nombre === '' || contacto.numero === '' || contacto.direccion  === ''){
            return Swal.fire("Completar todos los campos")
        }
        guardarContacto(contacto);
        Swal.fire("Contacto guardado")
        .then(()=>window.location.href = 'http://127.0.0.1:5500/preEntrega-gau/index.html'
        )
    });
}

addContact().then(() => cargarContactos()).catch(err => console.log(err))
