function sprint1() {
  const container = document.querySelector('main');

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
    "title": "Fabricio",
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



function mostrarCards(productos) {
  container.innerHTML = productos.map(producto => `
    <div class="d-flex flex-column justify-content-between card p-3" style="width: 18rem;" "height: 24rem;">
    <div>
    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${producto.id}.jpg" style= "width: 100%;" "max-height: 36rem;" "alt="Imagen de ${producto.title}">
      <h1>${producto.title}</h1> 
      <h2>${producto.category}</h2>
      <h3>Precio: $${producto.price}</h3>
      <h3>Stock: ${producto.stock} unidades</h3>
      <p>${producto.description}</p>
      </div>
      <button onclick="window.location.href='producto.html?prod=${producto.id}'">Ver más</button>
    </div>
  `).join('');
}


 const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  promise.then(() => {
    mostrarCards(data);
  });



const buscador = document.getElementById('buscador');
const botonFiltrar = document.getElementById('filtrar');
const botonLimpiar = document.getElementById('limpiar');
const botonModerno = document.getElementById('moderno');
const botonVintage = document.getElementById('vintage');
const botonVerTodos = document.getElementById('verTodos');

botonFiltrar.addEventListener('click', () => {
  const filtro = buscador.value.toLowerCase();
  const productosFiltrados = data.filter(producto => producto.title.toLowerCase().includes(filtro));
  mostrarCards(productosFiltrados);
});

botonLimpiar.addEventListener('click', () => {
  buscador.value = '';
  mostrarCards(data);
});

botonModerno.addEventListener('click', () => {
  const productosModerno = data.filter(producto => producto.category === 'Moderno');
  mostrarCards(productosModerno);
});

botonVintage.addEventListener('click', () => {
  const productosVintage = data.filter(producto => producto.category === 'Vintage');
  mostrarCards(productosVintage);
});

botonVerTodos.addEventListener('click', () => {
  mostrarCards(data);
});
}


sprint1();

