// 1. GESTIÓN DE GALERÍA
function cambiarImagen(idPrincipal, rutaNueva) {
    const imagenGrande = document.getElementById(idPrincipal);
    if (imagenGrande) {
        imagenGrande.src = rutaNueva;
    }
}

// 2. LÓGICA DEL CARRITO
let carrito = []; // Solo una vez al principio

// FUNCIÓN PARA CRUNCHYROLL: Calcula el precio real según el selector
function agregarCrunchyAlPedido() {
    const selector = document.getElementById('cantidad-crunchy');
    
    if (!selector) {
        console.error("Error: No se encontró el selector 'cantidad-crunchy'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "Crunchyroll (1 Perfil)";
        precioParaCarrito = 9;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "Crunchyroll (2 Perfiles)";
        precioParaCarrito = 16; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "Crunchyroll (3 Perfiles)";
        precioParaCarrito = 24;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

// FUNCIÓN GENERAL: Agrega cualquier producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarContador();

    // Reemplazamos el alert por este diseño moderno
    Swal.fire({
        title: '¡Producto Agregado!',
        text: `${nombre} se sumó a tu pedido.`,
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000, // Se cierra solo en 3 segundos
        timerProgressBar: true,
        background: '#fff',
        color: '#000',
        iconColor: '#25d366' // El verde de tu marca
    });
}

// Actualiza el número que aparece en el botón de WhatsApp
function actualizarContador() {
    const contadores = document.querySelectorAll('#cuenta-carrito');
    contadores.forEach(c => {
        c.innerText = carrito.length;
    });
}

// 3. ENVÍO A WHATSAPP
function enviarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Elige algo primero.");
        return;
    }

    let mensaje = "Hola! Quisiera pedir estos productos:%0A";
    let total = 0;

    carrito.forEach((prod) => {
        mensaje += `- ${prod.nombre} (${prod.precio} bs)%0A`;
        total += prod.precio;
    });

    mensaje += `%0A*Total: ${total} bs*`;
    
    const telefono = "59175123989"; 
   


    // USAMOS ESTE FORMATO QUE ES MÁS DIRECTO
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    
    // Cambiamos window.open por window.location.href para intentar saltar la página intermedia
    window.location.href = url;
}