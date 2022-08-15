const productos = [
    {
        id: 1,
        nombre: "Ender 3 V2",
        precio: 55000,
        imagen: "./img/ender-3-V2-01.jpg",
    },
    {
        id: 2,
        nombre: "Ender 2 Pro",
        precio: 45000,
        imagen: "./img/ender2pro1.png",
    },
    {
        id: 3,
        nombre: "Cr10 Pro v2",
        precio: 95000,
        imagen: "./img/creality-cr-10-smart-pro-1.jpg",
    },
    {
        id: 4,
        nombre: "Cr5 Pro",
        precio: 125000,
        imagen: "./img/creality-cr-10-smart-pro-1.jpg",
    },
];
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


const carritoDom = document.getElementById("carrito");


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
        productosCarritoHTML += carroHTMLL(producto);        
    }
    console.log(carroHTML);
    carritoDom.innerHTML = productosCarritoHTML;
}
 const btnFinalizar = document.getElementById(`finalizarCompra`);
 btnFinalizar.addEventListener("click", () => {
    btnFinalizar.insertAdjacentHTML("beforebegin",`<p>El total de su compra es:$${total}</p>`);
 })





