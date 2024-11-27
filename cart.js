const cardsSection = document.querySelector("#cart #cards");


function getCart(cart) {
    if (!cart || cart.length === 0) {
        cardsSection.innerHTML = `<p>No hay productos en el carrito.</p>`;
        return;
    }

    const list = cart.map(item => `
        <div class="card border shadow-none mb-3">
            <div class="card-body">
                <div class="d-flex align-items-start border-bottom pb-3">
                    <div class="me-4">
                        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${item.id}.jpg" 
                             alt="${item.title}" 
                             class="avatar-lg rounded img-fluid" />
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <h5 class="text-truncate font-size-18">${item.title}</h5>
                        <p class="text-muted">${item.description}</p>
                        <div class="row">
                            <div class="col-6 col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Precio</p>
                                    <h5 class="mb-0 mt-2">$${item.price}</h5>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Cantidad</p>
                                    <h5 class="mb-0 mt-2">${item.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Subtotal</p>
                                    <h5 class="mb-0 mt-2">$${(item.price * item.quantity).toFixed(2)}</h5>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-danger btn-sm mt-3" onclick="removeItem(${item.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    cardsSection.innerHTML = list;


    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    document.querySelector("#cart .card-header span").textContent = `$${total}`;
}

getCart(JSON.parse(localStorage.getItem("cart")))

function updateTotal(cart) {
    const cartTotalElement = document.querySelector("#cart-total");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${total}`;
    }
}




total(JSON.parse(localStorage.getItem("cart")))

getCart(JSON.parse(localStorage.getItem("cart")));
updateTotal(JSON.parse(localStorage.getItem("cart")));


function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter(item => item.id !== id); 
    localStorage.setItem("cart", JSON.stringify(newCart)); 


    getCart(newCart);


    updateTotal(newCart);

    const quantity = newCart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = quantity;
    } else {
        console.warn("Elemento #quantity no encontrado en el DOM.");
    }

    console.log("Producto eliminado. Carrito actualizado:", newCart);
}

function clearCart() {
    const emptyCart = [];
    localStorage.setItem("cart", JSON.stringify(emptyCart)); 


    getCart(emptyCart);
 
    updateTotal(emptyCart);


    localStorage.setItem("quantity", 0);
    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = "0";
    } else {
        console.warn("Elemento #quantity no encontrado en el DOM.");
    }

    console.log("Carrito vaciado.");
}



