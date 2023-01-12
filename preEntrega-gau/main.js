const carrito = []

const ordenarMenorMayor = () => {
    Catalogo.sort((a, b) => a.precio - b.precio)
    mostrarLista()
};

const ordenarMayorMenor = () => {
    Catalogo.sort((a, b) => b.precio - a.precio)
    mostrarLista()
};

const mostrarLista = () => {
    const lista = Catalogo.map(catalogo => {
        return '-' + catalogo.nombre + '$' + catalogo.precio
    });
    alert('Lista de precios:'+'\n\n'+lista.join('\n'));
    console.log(lista,"lista")
    comprar(lista);
};


const comprar = (lista) => {
    let nombreProducto = " "
    let cantidadProducto = 0
    let otroProducto = false

    do {
        nombreProducto = prompt("¿cuál de los siguientes productos desea comprar? " + "\n" + lista.join("\n"));
        cantidadProducto = parseInt(prompt("¿cuántos desea comprar? "));

        const producto = Catalogo.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
        if (producto) {
            añadirCarrito(producto, producto.id, cantidadProducto);
        } else {
            alert("El producto no está disponible.")
        }
        
        otroProducto = confirm("¿desea agregar otro producto al carrito?");

    } while (otroProducto);

    finalizarCompra();
};

const añadirCarrito = (producto, productoId, cantidadProducto) => {
    const productoRepetido = carrito.find(producto => producto.Id === productoId);
    if (!productoRepetido) {
        producto.cantidad += cantidadProducto;
        carrito.push(producto);
    } else {
        productoRepetido.cantidad += cantidadProducto;
    }
};

const eliminarProductoDelCarrito = (nombreProductoEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre === nombreProductoEliminar) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    finalizarCompra();
};

const finalizarCompra = () => {
    
    const productosCompra = carrito.map(producto => {
        return "-" + producto.nombre + " cantidad: " + producto.cantidad
    });
    console.log(productosCompra,"prod")
    const isConfirmarCompra = confirm("confirme su compra: "
        + "\n" + productosCompra.join("\n")
        + "\nPresione aceptar para continuar o cancelar para eliminar el producto"
    )
    if (isConfirmarCompra) {
        finalizar(productosCompra);
    } else {
        const productoEliminar = prompt("Ingrese el nombre del producto que desea eliminar: ")
        eliminarProductoDelCarrito(productoEliminar);
    }

};


const finalizar = (productosCompra) => {

    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);
    alert("su compra: "
        + "\n" + productosCompra.join("\n")
        + "\nTotal de productos:" + cantidadTotal
        + "\nel total de su compra es: " + precioTotal
    );
};

const fincomprar = () => {
    const productosBaratos = confirm('¿Querés ordenar la lista de productos del mas barato al mas caro?')

    if (productosBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


fincomprar();
