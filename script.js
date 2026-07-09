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
        precioParaCarrito = 10;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "Crunchyroll (2 Perfiles)";
        precioParaCarrito = 20; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "Crunchyroll (3 Perfiles)";
        precioParaCarrito = 30;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarNetflixAlPedido() {
    const selector = document.getElementById('cantidad-netflix');
    
    if (!selector) {
        console.error("Error: No se encontró el selector 'cantidad-netflix'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "Netflix (1 Perfil)";
        precioParaCarrito = 33;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "Netflix (2 Perfiles)";
        precioParaCarrito = 66; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "Netflix (3 Perfiles)";
        precioParaCarrito = 99;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

function agregarDisneyAlPedido() {
    const selector = document.getElementById('cantidad-disney');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-disney'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "Disney (1 Perfil)";
        precioParaCarrito = 26;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "Disney (2 Perfiles)";
        precioParaCarrito = 52; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "Disney (3 Perfiles)";
        precioParaCarrito = 78;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

function agregarHbomaxAlPedido() {
    const selector = document.getElementById('cantidad-hbomax');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-hbomax'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "Hbomax (1 Perfil)";
        precioParaCarrito = 13;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "Hbomax (2 Perfiles)";
        precioParaCarrito = 26; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "Hbomax (3 Perfiles)";
        precioParaCarrito = 39;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}




function agregarPrimevideoAlPedido() {
    const selector = document.getElementById('cantidad-primevideo');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-primevideo'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "primevideo (1 Perfil)";
        precioParaCarrito = 12;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "primevideo (2 Perfiles)";
        precioParaCarrito = 24; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "primevideo (3 Perfiles)";
        precioParaCarrito = 26;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}






function agregarParamountAlPedido() {
    const selector = document.getElementById('cantidad-paramount');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-paramount'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "paramount (1 Perfil)";
        precioParaCarrito = 25;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "paramount (2 Perfiles)";
        precioParaCarrito = 38; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "paramount (3 Perfiles)";
        precioParaCarrito = 57;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarSpotifyAlPedido() {
    const selector = document.getElementById('cantidad-spotify');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-spotify'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "spotify (1 Perfil)";
        precioParaCarrito = 27;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "spotify (2 Perfiles)";
        precioParaCarrito = 54; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "spotify (3 Perfiles)";
        precioParaCarrito = 80;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarYouTubeAlPedido() {
    const selector = document.getElementById('cantidad-YouTube');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-YouTube'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "YouTube (1 Perfil)";
        precioParaCarrito = 20;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "YouTube (2 Perfiles)";
        precioParaCarrito = 40; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "YouTube (3 Perfiles)";
        precioParaCarrito = 60;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}



function agregarChatgptAlPedido() {
    const selector = document.getElementById('cantidad-chatgpt');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-chatgpt'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "chatgpt (1 Perfil)";
        precioParaCarrito = 30;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "chatgpt (2 Perfiles)";
        precioParaCarrito = 60; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "chatgpt (3 Perfiles)";
        precioParaCarrito = 90;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

function agregarGeminiAlPedido() {
    const selector = document.getElementById('cantidad-gemini');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-gemini'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "gemini (1 Perfil)";
        precioParaCarrito = 25;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "gemini (2 Perfiles)";
        precioParaCarrito = 50; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "gemini (3 Perfiles)";
        precioParaCarrito = 75;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}



function agregarCapcutAlPedido() {
    const selector = document.getElementById('cantidad-capcut');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-capcut'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "capcut (1 Perfil)";
        precioParaCarrito =55;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "capcut (2 Perfiles)";
        precioParaCarrito = 44; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "capcut (3 Perfiles)";
        precioParaCarrito = 50;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}



function agregarCnvaAlPedido() {
    const selector = document.getElementById('cantidad-canva');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-canva'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "canva (1 Perfil)";
        precioParaCarrito = 15;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "canva (2 Perfiles)";
        precioParaCarrito = 30; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "canva (3 Perfiles)";
        precioParaCarrito = 45;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}



function agregarVikiAlPedido() {
    const selector = document.getElementById('cantidad-viki');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-viki'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "viki (1 Perfil)";
        precioParaCarrito = 15;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "viki (2 Perfiles)";
        precioParaCarrito = 28; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "viki (3 Perfiles)";
        precioParaCarrito = 42;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarAppletvAlPedido() {
    const selector = document.getElementById('cantidad-apple');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-apple'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "apple (1 Perfil)";
        precioParaCarrito = 15;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "apple (2 Perfiles)";
        precioParaCarrito = 30; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "apple (3 Perfiles)";
        precioParaCarrito = 45;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

function agregarFlujoAlPedido() {
    const selector = document.getElementById('cantidad-flujo');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-flujo'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "flujo (1 Perfil)";
        precioParaCarrito = 23;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "flujo (2 Perfiles)";
        precioParaCarrito = 43; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "flujo (3 Perfiles)";
        precioParaCarrito = 50;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}

function agregarOleadaAlPedido() {
    const selector = document.getElementById('cantidad-oleada');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-oleada'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "oleada (1 Perfil)";
        precioParaCarrito = 23;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "oleada (2 Perfiles)";
        precioParaCarrito = 43; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "oleada (3 Perfiles)";
        precioParaCarrito = 50;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarZonaAlPedido() {
    const selector = document.getElementById('cantidad-zona');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-zona'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "zona (1 Perfil)";
        precioParaCarrito = 23;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "zona (2 Perfiles)";
        precioParaCarrito = 43; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "zona (3 Perfiles)";
        precioParaCarrito = 50;
    }

    // Enviamos los datos correctos a la función general
    agregarAlCarrito(nombreParaCarrito, precioParaCarrito);
}


function agregarVixAlPedido() {
    const selector = document.getElementById('cantidad-vix');
    
    if (!selector) {
        console.error("Error: No se encontró el selector cantidad-vix'");
        return;
    }

    const cantidadSeleccionada = selector.value;
    let nombreParaCarrito = "";
    let precioParaCarrito = 0;

    if (cantidadSeleccionada === "1") {
        nombreParaCarrito = "vix (1 Perfil)";
        precioParaCarrito = 8;
    } else if (cantidadSeleccionada === "2") {
        nombreParaCarrito = "vix (2 Perfiles)";
        precioParaCarrito = 16; 
    } else if (cantidadSeleccionada === "3") {
        nombreParaCarrito = "vix (3 Perfiles)";
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
    
    const telefono = "59169950080"; 
   


    // USAMOS ESTE FORMATO QUE ES MÁS DIRECTO
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    
    // Cambiamos window.open por window.location.href para intentar saltar la página intermedia
    window.location.href = url;
}