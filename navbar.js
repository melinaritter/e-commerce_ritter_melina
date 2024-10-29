const categorias = ["Pantalones", "Remeras", "Zapatillas"];

let menu = "";

for (let categoria of categorias) {
    menu += `<li>${categoria}</li>`;
}

document.querySelector("header").innerHTML = `<ul>${menu}</ul>`;