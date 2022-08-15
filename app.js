const productos = [
    {
        id: 1,
        nombre: "Ender 3 V2",
        precio: "55000",
        imagen: "./img/ender-3-V2-01.jpg",
    },
    {
        id: 2,
        nombre: "Ender 2 Pro",
        precio: "45000",
        imagen: "./img/ender2pro1.png",
    },
    {
        id: 3,
        nombre: "Cr10 Pro v2",
        precio: "95000",
        imagen: "./img/creality-cr-10-smart-pro-1.jpg",
    },
    {
        id: 4,
        nombre: "Cr5 Pro",
        precio: "125000",
        imagen: "./img/creality-cr-10-smart-pro-1.jpg",
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
    <div class="card-body">
    <h5 class="card-tittle">${producto.nombre} ---- $${producto.precio}</h5>
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
        const productoCarrito ={
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio,
            idCompra: carrito.length,
            id: producto.id,
        }
        carrito.push(productoCarrito);
        addTocarrito ();
       
    });
};

const addTocarrito = () => {
    let productosCarritoHTML = "";
    for (const producto of carrito) {
    productosCarritoHTML += productoCarritoHTML(producto);
    }
    console.log(productoCarritoHTML);
    carritoDom.innerHTML = productosCarritoHTML;

    for (const producto of carrito){
        const boton =document.getElementById(`boton-quitar-${producto.idCompra}`);
        boton.addEventListener("click", () => {
            carrito = carrito.filter((p) => p.idCompra != producto.idCompra);
        });
    }
}





