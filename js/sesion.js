// sesion.js - sesión simulada (localStorage) y botones del encabezado
// Lo usan todas las páginas

//  SESIÓN 
var CLAVE_SESION = "chilldballs_sesion";

function haySesion() {
    return localStorage.getItem(CLAVE_SESION) !== null;
}

function iniciarSesion(correo) {
    localStorage.setItem(CLAVE_SESION, correo);
}

function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
    window.location.href = "index.html";
}

function exigirSesion() {
    if (!haySesion()) {
        window.location.href = "login.html";
    }
}

//  BOTONES DEL ENCABEZADO 
function crearEnlace(texto, clase, destino) {
    var a = document.createElement("a");
    a.href = destino;
    a.className = "btn btn-sm fw-bold me-1 " + clase;
    a.textContent = texto;
    return a;
}

function pintarZonaUsuario() {
    var zona = document.getElementById("zonaUsuario");
    if (zona === null) return;

    var paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual === "") paginaActual = "index.html";

    zona.innerHTML = "";

    if (paginaActual !== "index.html") {
        zona.appendChild(crearEnlace("Catálogo", "btn-outline-light", "index.html"));
    }

    if (haySesion()) {
        if (paginaActual !== "tabla.html") {
            zona.appendChild(crearEnlace("Inventario", "btn-info text-white", "tabla.html"));
        }
        var salir = document.createElement("button");
        salir.className = "btn btn-sm fw-bold btn-danger";
        salir.textContent = "Cerrar sesión";
        salir.addEventListener("click", cerrarSesion);
        zona.appendChild(salir);
    } else {
        if (paginaActual !== "login.html") {
            zona.appendChild(crearEnlace("Login", "btn-outline-light", "login.html"));
        }
        if (paginaActual !== "registro.html") {
            zona.appendChild(crearEnlace("Registro", "btn-warning", "registro.html"));
        }
    }
}

//  INICIO 
pintarZonaUsuario();