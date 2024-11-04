const data = [
    [{
      "id": 1,
      "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
      "category": "Industrial",
      "price": "lcave0@diigo.com",
      "stock": "Male",
      "ip_address": "163.78.137.104"
    }, {
      "id": 2,
      "description": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      "category": "Health",
      "price": "jperel1@umn.edu",
      "stock": "Male",
      "ip_address": "131.22.154.123"
    }, {
      "id": 3,
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
      "category": "Computers",
      "price": "ngillson2@ameblo.jp",
      "stock": "Non-binary",
      "ip_address": "182.216.141.155"
    }, {
      "id": 4,
      "description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      "category": "Games",
      "price": "bbonnor3@usatoday.com",
      "stock": "stockqueer",
      "ip_address": "73.209.86.15"
    }, {
      "id": 5,
      "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
      "category": "Beauty",
      "price": "bkingaby4@flickr.com",
      "stock": "Male",
      "ip_address": "6.127.106.137"
    }, {
      "id": 6,
      "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      "category": "Grocery",
      "price": "degell5@irs.gov",
      "stock": "Male",
      "ip_address": "27.226.237.42"
    }, {
      "id": 7,
      "description": "Morbi a ipsum. Integer a nibh.",
      "category": "Health",
      "price": "sridge6@delicious.com",
      "stock": "Female",
      "ip_address": "60.90.23.127"
    }, {
      "id": 8,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "category": "Books",
      "price": "jmaccosty7@princeton.edu",
      "stock": "Male",
      "ip_address": "133.14.119.53"
    }, {
      "id": 9,
      "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
      "category": "Sports",
      "price": "saulton8@hc360.com",
      "stock": "Male",
      "ip_address": "100.145.215.201"
    }]
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