const navbarContainer = document.querySelector('.navbar-collapse'); 

if (navbarContainer) {
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0'); 
    const items = ['Moderno', 'Vintage',];
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = '#';  
        a.textContent = item;
        
        li.appendChild(a);
        ul.appendChild(li);
    });


    navbarContainer.appendChild(ul);
}


