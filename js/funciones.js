function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');
    var errorPassword = document.getElementById('errorPassword');
    var errorMensaje = document.getElementById('errorMensaje');
    var valido = true;

    function load_page() {
        document.getElementById("text").innerText = "";
        document.getElementById("impresion").value = ;
        document.getElementById("name_search").value = ;

        let hour_system = new Date();
     
        document.getElementById("hour_system").value = 

    }

    // Validar nombre
    if (nombre === '') {
        errorNombre.innerHTML = 'Por favor, ingresa tu nombre.';
        valido = false;
    } else {
        errorNombre.innerHTML = '';
    }

    // Validar email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        errorEmail.innerHTML = 'Por favor, ingresa tu email.';
        valido = false;
    } else if (!emailPattern.test(email)) {
        errorEmail.innerHTML = 'Por favor, ingresa un email válido.';
        valido = false;
    } else {
        errorEmail.innerHTML = '';
    }

    // Validar contraseña
    if (password === '') {
        errorPassword.innerHTML = 'Por favor, ingresa tu contraseña.';
        valido = false;
    } else if (password.length < 6) {
        errorPassword.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
        valido = false;
    } else {
        errorPassword.innerHTML = '';
    }

    // Validar mensaje
    if (mensaje === '') {
        errorMensaje.innerHTML = 'Por favor, ingresa un mensaje.';
        valido = false;
    } else {
        errorMensaje.innerHTML = '';
    }

    return valido;
}

function Buscar() {
    let nombre_buscar = document.getElementById("name_Busar").value;
    let word = nombre_buscar.indexOf("e");
    Swal.fire (word+"");
}