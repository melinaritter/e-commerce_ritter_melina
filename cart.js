const cardsSection = document.querySelector("#cart #cards")

function getCart(cards) {
    const list = cards.map(card => `
            <div class="card border shadow-none">
    <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
            <div class="me-4">
                <img src="${card.product.href}" alt="${card.product.description}" class="avatar-lg rounded img-fluid" />
            </div>
            <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-18">${card.product.description}</h5>
                <div class="row">
                    <div class="col-6 col-md-4">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Precio</p>
                            <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-5">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Cantidad</p>
                            <h5 class="mb-0 mt-2">${card.quantity}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="mt-3">
                            <p class="text-muted mb-2">Total</p>
                            <h5>${(card.product.precio * card.quantity)}</h5>
                        </div>
                    </div>
                    <div class="col-6 col-md-2">
                        <div class="mt-3">
                            <p class="mb-2 br-2" style="cursor:pointer; color:red;" onclick="removeItem(${card.product.id})">Eliminar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
    ).join("");
    cardsSection.innerHTML = list;
}

getCart(JSON.parse(localStorage.getItem("cart")))