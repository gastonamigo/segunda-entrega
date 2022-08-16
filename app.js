class lista {
    constructor (id, nombre, precio, imagen){
        this.id  = id;
        this.nombre = nombre;
        this.precio  = precio;
        this.imagen = imagen;
        
        }
}
const productos = []

productos.push(new lista(1, "Ender 3 v2", 55000, "./img/ender-3-V2-01.jpg"));
productos.push(new lista(2, "Ender 2 pro", 45000, "./img/ender2pro1.png"));
productos.push(new lista(3, "Cr10 pro v2", 95000, "./img/creality-cr-10-smart-pro-1.jpg"));
productos.push(new lista(4, "Cr5 pro", 125000, "./img/cr5pro1.jpg"));

const carrito = [];
const catalogoHTML = (producto) => {
    const card = `
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
    return card;
};
const carroHTML = (producto) => {
    const card = `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-tittle">${producto.nombre} ---- $${producto.precio}</h5>
    </div>
    </div>
    </div>`;
    return card;
};
const catalogo = document.getElementById("lista");
for (const producto of productos) {
    catalogo.innerHTML += catalogoHTML(producto);
}
const listaCarrito = document.getElementById("carrito");

for (const producto of productos) {
    const boton = document.getElementById(`boton-${producto.id}`);
    boton.addEventListener("click", () => {
        carrito.push(producto);
        total += producto.precio;
        addTocarrito();
    });
};
let total = 0;
const addTocarrito = () => {
    let productosCarritoHTML = "";    
    for (const producto of carrito) {
        productosCarritoHTML += carroHTML(producto);        
    }
    console.log(carroHTML);
    listaCarrito.innerHTML = productosCarritoHTML;
}
 const btnFinalizar = document.getElementById(`finalizarCompra`);
 btnFinalizar.addEventListener("click", () => {
    btnFinalizar.insertAdjacentHTML("beforebegin",`<p>El total de su compra es:$${total}</p>`);
 })




