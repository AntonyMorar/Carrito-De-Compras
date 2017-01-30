var carrito = {
    id: "default",
    img: "deefault",
    des: "default",
    precio: 0,
    cantidad: 0
};
var precioTotal = 0;
var compraImg;
var compraDes;

function anadirCarrito(id, img, des, precio, cantidad) {
    carrito.id = id;
    carrito.img = img;
    carrito.des = des;
    carrito.precio = parseInt(precio);
    carrito.cantidad = parseInt(cantidad);
}

for (var i = 0; i < document.getElementsByClassName("producto").length; i++) {
    document.getElementsByClassName("producto")[i].onclick = function() {
        this.dataset.cantidad++;
        anadirCarrito(this.dataset.idproducto, this.dataset.img, this.dataset.des, this.dataset.precio, this.dataset.cantidad);
        precioTotal = precioTotal + carrito.precio;
        //Añadir al <p> con el id precioTotal la cantidad total de dinero
        document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
        if (this.dataset.cantidad <= 1) {
            //Agregar div con contenido unico de carrito de compras (solo puede existir 1)
            var compra = document.createElement("div");
            compra.setAttribute("id", carrito.id);
            document.getElementById("carritoDeCompras").appendChild(compra);
            agregarElementos(this.dataset.cantidad);
        } else {
            agregarElementos();
        }
    }
}

function actualizador() {
    //Agregar imagen a carrito de compras
    compraImg = document.createElement("img");
    compraImg.setAttribute("src", carrito.img);
    document.getElementById(carrito.id).appendChild(compraImg);
    //Agregar Boton "+" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "mas");
    compraDes.setAttribute("id", "mas" + carrito.id);
    compraDes.setAttribute("onclick", "sumar(this.id)");
    compraDes.innerHTML = "+";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Cantidad a carrito de compras
    compraDes = document.createElement("p");
    compraDes.setAttribute("class", "cantidad");
    compraDes.innerHTML = carrito.cantidad;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Boton "-" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "menos");
    compraDes.setAttribute("id", "menos" + carrito.id);
    compraDes.setAttribute("onclick", "restar(this.id)");
    compraDes.innerHTML = "-";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar PALABRA Cantidad a carrito de compras
    compraDes = document.createElement("p");
    compraDes.setAttribute("class", "cantidad");
    compraDes.innerHTML = "Cantidad: ";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Producto a carrito de compras
    compraDes = document.createElement("h2");
    compraDes.innerHTML = "Producto: " + carrito.id;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Descripción a carrito de compras
    compraDes = document.createElement("p");
    compraDes.innerHTML = carrito.des;;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Precio a carrito de compras
    compraDes = document.createElement("h3");
    compraDes.innerHTML = "Precio: " + carrito.precio;
    document.getElementById(carrito.id).appendChild(compraDes);
}

function agregarElementos() {
    if (carrito.cantidad != 1) {
        for (i = 0; i < 8; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
    }
    actualizador();
}

function eliminarElementos() {
    if (carrito.cantidad == 0) {
        document.getElementById("carritoDeCompras").removeChild(document.getElementById(carrito.id));
    } else {
        for (i = 0; i < 8; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
        actualizador();
    }
}

function sumar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("producto").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("producto")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("producto")[j].dataset;
    nuevaData.cantidad++;
    anadirCarrito(nuevaData.idproducto, nuevaData.img, nuevaData.des, nuevaData.precio, nuevaData.cantidad);
    agregarElementos(carrito.cantidad);
    precioTotal = precioTotal + carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
}

function restar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("producto").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("producto")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("producto")[j].dataset;
    nuevaData.cantidad--;
    anadirCarrito(nuevaData.idproducto, nuevaData.img, nuevaData.des, nuevaData.precio, nuevaData.cantidad);
    eliminarElementos(carrito.cantidad);
    precioTotal = precioTotal - carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
}
