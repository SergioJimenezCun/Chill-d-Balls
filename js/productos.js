// productos.js - lista de productos (se guarda en localStorage)
// Lo usan: index, tabla, agregar, editar y compra

//  DATOS 
var CLAVE = "chilldballs_productos";

var productosIniciales = [
    { id: "01", nombre: "Zoo York Chunky Purple",  tallas: "38, 39, 40, 41", precio: 130000, estado: "Disponible", imagen: "img/1.jpeg", descripcion: "Gamuza negra con detalles morados y cordones gordos." },
    { id: "02", nombre: "Kaifeng Skull Y2K",       tallas: "38, 39, 40, 41", precio: 120000, estado: "Disponible", imagen: "img/2.jpeg", descripcion: "Estilo skate en gamuza negra con estampado de calavera." },
    { id: "03", nombre: "Vans Brown & Pink",       tallas: "38, 39, 40, 41", precio: 140000, estado: "Disponible", imagen: "img/3.jpeg", descripcion: "Retro 2000s marrón con cordones fat laces rosa pastel." },
    { id: "04", nombre: "Zoo York Classic Skate",  tallas: "38, 39, 40, 41", precio: 125000, estado: "Disponible", imagen: "img/4.jpeg", descripcion: "Corte ancho negro con bordado frontal y cordones dobles." },
    { id: "05", nombre: "Swear Cyber Platform",    tallas: "38, 39, 40, 41", precio: 180000, estado: "Disponible", imagen: "img/5.jpeg", descripcion: "Plataforma alta cyberpunk con correas de velcro reflectantes." },
    { id: "06", nombre: "Nike Dunk x Off-White",   tallas: "38, 39, 40, 41", precio: 250000, estado: "Disponible", imagen: "img/6.jpeg", descripcion: "Edición especial verde olivo con sistema de cuerdas dobles." }
];

//  GUARDAR Y LEER 
function cargarProductos() {
    var guardado = localStorage.getItem(CLAVE);
    if (guardado === null) {
        guardarProductos(productosIniciales);
        return productosIniciales;
    }
    return JSON.parse(guardado);
}

function guardarProductos(lista) {
    localStorage.setItem(CLAVE, JSON.stringify(lista));
}

//  FORMATO 
function formatearPrecio(numero) {
    return "$" + Number(numero).toLocaleString("es-CO") + " COP";
}

function claseEstado(estado) {
    if (estado === "Disponible")     return "bg-success";
    if (estado === "Pocas Unidades") return "bg-warning text-dark";
    return "bg-danger";
}