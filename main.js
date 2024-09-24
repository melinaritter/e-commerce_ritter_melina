document.querySelector('h1').textContent = 'Productos';

const container = document.querySelector('section.container');
const cards = [];

for (let i = 1; i <= 9; i++) {
    const card = `
      <div class="card">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
        <h2>Producto ${i}</h2>
        <p>Descripción del producto ${i}</p>
      </div>
    `;
    cards.push(card);
}

document.querySelector("section").innerHTML = (cards);
