function sprint1() {
document.querySelector('h1').textContent = 'Productos';

const container = document.querySelector('section.container');
const cards = [];

for (let i = 1; i <= 9; i++) {
  const card = `
      <div class="card">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
        <h2>Título del producto ${i}</h2>
        <p>Descripción del producto ${i}</p>
         <button onclick="window.location.href='producto.html'">Ver más ${i}</button>
      </div>
    `;
    cards.push(card);
}

document.querySelector("section").innerHTML = (cards.join);
}

class Producto {
  constructor(titulo, detalle, precio, stock, imagen) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
}

const producto1 = new Producto("Producto 1", "Descripción del producto 1", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");
const producto2 = new Producto("Producto 2", "Descripción del producto 2", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg");
const producto3 = new Producto("Producto 3", "Descripción del producto 3", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg");
const producto4 = new Producto("Producto 4", "Descripción del producto 4", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg");
const producto5 = new Producto("Producto 5", "Descripción del producto 5", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg");
const producto6 = new Producto("Producto 6", "Descripción del producto 6", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg");
const producto7 = new Producto("Producto 7", "Descripción del producto 7", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg");
const producto8 = new Producto("Producto 8", "Descripción del producto 8", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg");
const producto9 = new Producto("Producto 9", "Descripción del producto 9", 100, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg");



  let productoActual = {};

  function verProducto(i) {
    productoActual = {
        titulo: `Título del producto ${i}`,
        descripcion: `Descripción del producto ${i}`,
        imagen: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg`,
    };
    window.location.href = 'producto.html'; 
  }

sprint1();