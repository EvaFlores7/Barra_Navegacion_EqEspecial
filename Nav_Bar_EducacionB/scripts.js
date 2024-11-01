function redirigirUsuario() {
    // Obtiene el valor seleccionado en el campo "Tipo de usuario"
    const tipoUsuario = document.getElementById("tipoUsuario").value;

    // Redirige a la página correspondiente según el tipo de usuario
    if (tipoUsuario === "empresa") {
        location.assign("empresa.html");  // Cambia a la página para "Empresa"
    } else if (tipoUsuario === "participante") {
        location.assign("participante.html");  // Cambia a la página para "Participante"
    }

    // Evita que el formulario se envíe realmente
    return false;
}
