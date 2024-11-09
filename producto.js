const data = [
    {
      "id": 1,
      "title": "Antonio",
      "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
      "category": "Moderno",
      "price": "52",
      "stock": "4",
      "ip_address": "163.78.137.104"
    }, {
      "id": 2,
      "title": "Benito",
      "description": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      "category": "Vintage",
      "price": "47",
      "stock": "6",
      "ip_address": "131.22.154.123"
    }, {
      "id": 3,
      "title": "Carlos",
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
      "category": "Moderno",
      "price": "75",
      "stock": "9",
      "ip_address": "182.216.141.155"
    }, {
      "id": 4,
      "title": "David",
      "description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      "category": "Moderno",
      "price": "69",
      "stock": "11",
      "ip_address": "73.209.86.15"
    }, {
      "id": 5,
      "title": "Ernesto",
      "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
      "category": "Vintage",
      "price": "74",
      "stock": "8",
      "ip_address": "6.127.106.137"
    }, {
      "id": 6,
      "title": "fabricio",
      "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      "category": "Moderno",
      "price": "49",
      "stock": "6",
      "ip_address": "27.226.237.42"
    }, {
      "id": 7,
      "title": "Gaston",
      "description": "Morbi a ipsum. Integer a nibh.",
      "category": "Vintage",
      "price": "60",
      "stock": "10",
      "ip_address": "60.90.23.127"
    }, {
      "id": 8,
      "title": "Heriberto",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "category": "Vintage",
      "price": "53",
      "stock": "6",
      "ip_address": "133.14.119.53"
    }, {
      "id": 9,
      "title": "Ignacio",
      "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
      "category": "Moderno",
      "price": "64",
      "stock": "9",
      "ip_address": "100.145.215.201"
    }
  ]
  



  const urlParams = new URLSearchParams(window.location.search);
  const prodId = parseInt(urlParams.get("prod"), 10);
  
  const productoSeleccionado = data.find(producto => producto.id === prodId);
  
  if (productoSeleccionado) {
      document.querySelector("#product-detail").innerHTML = `
          <h2>Producto ${productoSeleccionado.id}</h2>
          <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${productoSeleccionado.id}.jpg" alt="Producto ${productoSeleccionado.id}">
          <p>${productoSeleccionado.description}</p>
          <p>Categoría: ${productoSeleccionado.category}</p>
      `;
  } else {
      document.querySelector("#product-detail").textContent = "Producto no encontrado.";
  }



document.addEventListener("DOMContentLoaded", function() {
  const contenedorBotones = document.getElementById("contenedor-botones");
  const stockDisponible = productoSeleccionado.stock; 
  
  if (contenedorBotones) {

    const contenedorCantidad = document.createElement("div");
    contenedorCantidad.classList.add("d-flex", "align-items-center");

    const btnDisminuir = document.createElement("button");
    btnDisminuir.classList.add("btn", "btn-secondary", "me-2");
    btnDisminuir.textContent = "-";

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.value = 1; 
    inputCantidad.min = 1; 
    inputCantidad.classList.add("form-control", "text-center");
    inputCantidad.style.width = "60px";

    const btnIncrementar = document.createElement("button");
    btnIncrementar.classList.add("btn", "btn-secondary", "ms-2");
    btnIncrementar.textContent = "+";

    contenedorCantidad.appendChild(btnDisminuir);
    contenedorCantidad.appendChild(inputCantidad);
    contenedorCantidad.appendChild(btnIncrementar);
    contenedorBotones.appendChild(contenedorCantidad);


    btnDisminuir.addEventListener("click", () => {
      if (inputCantidad.value > 1) inputCantidad.value--;
    });

    btnIncrementar.addEventListener("click", () => {
      if (inputCantidad.value < stockDisponible) inputCantidad.value++;
    });


    const botonCompra = document.createElement("button");
    botonCompra.classList.add("btn", "btn-primary", "mt-2");

    if (localStorage.getItem("email")) {
      botonCompra.textContent = "Comprar";
      botonCompra.addEventListener("click", () => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cantidadSeleccionada = parseInt(inputCantidad.value, 10);


        const productoExistente = cart.find(item => item.idProduct === productoSeleccionado.id);

        if (productoExistente) {

          const nuevaCantidad = Math.min(productoExistente.quantity + cantidadSeleccionada, stockDisponible);
          productoExistente.quantity = nuevaCantidad;
        } else {

          cart.push({
            idProduct: productoSeleccionado.id,
            quantity: cantidadSeleccionada
          });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        const cantidadTotal = cart.reduce((acumulado, item) => acumulado + item.quantity, 0);
        localStorage.setItem("quantity", cantidadTotal.toString());


        const quantityTag = document.getElementById("quantity");
        quantityTag.innerText = cantidadTotal;

        alert("Producto agregado al carrito.");
      });
    } else {
      botonCompra.textContent = "Inicie sesión para comprar";
      botonCompra.addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }

    contenedorBotones.appendChild(botonCompra);
  } else {
    console.error("No se encontró el contenedor para los botones de cantidad.");
  }
});



  const counter = document.querySelector("#producto .input-gtroup input")

  function increaseItem() {
    counter.value = Number(counter.value) + 1
  }

  function addItem() {
    const cart = JSON.parse(localStorage.getItem("cart"))

    const idProduct = Number(window.location.search.split("=")[1])

    cart.push({idProduct, quantity: Number(counter.value) })

    localStorage.setItem("cart", JSON.stringify(cart))

    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    const quantityTag = document.querySelector("#quantity")

    quantityTag.innerText = quantity
  }