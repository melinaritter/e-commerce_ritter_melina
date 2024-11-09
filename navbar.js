const navbarContainer = document.querySelector('.navbar-collapse'); 

const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Meli</a>
      <button class="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <button id="moderno" class="btn btn-link nav-link">Moderno</button>
          </li>
          <li class="nav-item">
            <button id="vintage" class="btn btn-link nav-link">Vintage</button>
          </li>
          <li class="nav-item">
            <button id="verTodos" class="btn btn-link nav-link">Ver Todos</button>
          </li>
        </ul>
        

        <div class="d-flex">
          <input id="buscador" class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Buscar">
          <button id="filtrar" class="btn btn-outline-success" type="button">Filtrar</button>
          <button id="limpiar" class="btn btn-outline-danger ms-2" type="button">Limpiar</button>
        </div>


        <div class="d-flex ms-auto align-items-center">
          ${localStorage.getItem("email") 
            ? `<span>${localStorage.getItem("email")}</span> | 
               <span onclick="logout()" style="cursor:pointer; color:blue;">Cerrar sesión</span>` 
            : `<a href="login.html" class="nav-link">Iniciar sesión</a>`
          }
        </div>
      </div>
    </div>
  </nav>
`;


navbarContainer.innerHTML = navbarHTML;
 
function logout() {
  localStorage.clear();
  location.href = "index.html";
}
