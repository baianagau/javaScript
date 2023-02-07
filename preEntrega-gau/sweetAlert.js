const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
    });
    cargarContactos(ls, listado)

});
