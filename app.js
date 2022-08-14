const productos = [
    {
        id: 1,
        nombre: "impresora 1",
        precio: "45000",
        imagen: "https://picsum.photos/200",
    },
    {
        id: 2,
        nombre: "impresora 2",
        precio: "75000",
        imagen: "https://picsum.photos/200",
    },
    {
        id: 3,
        nombre: "impresora 3",
        precio: "85000",
        imagen: "https://picsum.photos/200",
    },
];
const carrito = [];
const productoHTML = (producto) => {
    const texto = `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top"/>
    <div class="card-body">
    <h5 class="card-tittle">${producto.nombre}</h5>
    <p>Precio: ${producto.precio}</p>
    <button type="button" id="boton-${producto.id}" class="btn btn-success">Agregar</button>
    </div>
    </div>
    </div>`;
    return texto;
};
const productoCarritoHTML = (producto) => {
    const texto = `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top"/>
    <div class="card-body">
    <h5 class="card-tittle">${producto.nombre}</h5>
    <p>Precio: ${producto.precio}</p>
    <button type="button" id="boton-${producto.id}" class="btn btn-danger">Quitar</button>
    </div>
    </div>
    </div>`;
    return texto;
};
const catalogo = document.getElementById("catalogo");
for (const producto of productos) {
    catalogo.innerHTML += productoHTML(producto);
}


const carritoDom = document.getElementById("carrito");


for (const producto of productos) {
    const boton = document.getElementById(`boton-${producto.id}`);
    boton.addEventListener("click", () => {
        carrito.push(producto);
        carritoDom.innerHTML += productoCarritoHTML(producto);
    });
};





