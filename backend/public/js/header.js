//// FUNCION PARA MANEJAR MENU HAMBURGUESA y el MENU DE LOGIN/REGISTER DEL HEADER //// 
const deviceWidth = window.innerWidth;
const navbar = document.getElementById('right-floating-nav');
const logInWindow = document.getElementById('log-in-window');
const searchBar = document.getElementById('searchbar-container');
const body = document.body;
const modal = document.querySelector('.modal');

// Función para abrir la navegación
function openNav() {
    navbar.style.opacity = '1';
    if (deviceWidth < 768) {
        navbar.style.width = '100%';
    } else if (deviceWidth >= 768) {
        navbar.style.display = 'flex';
        navbar.style.opacity = '1';
    }
}

// Función para ir atrás
function goBack() {
    window.history.back();
}

// Función para cerrar la navegación
function closeNav() {
    navbar.style.opacity = '0';
    if (deviceWidth < 768) {
        navbar.style.width = '0';
    } else if (deviceWidth >= 768) {
        navbar.style.display = 'none';
        navbar.style.opacity = '0';
    }
}

// Función para abrir o cerrar la navegación (modificada)
function toggleNav() {
    if (navbar.style.opacity === '1') {
        closeNav();
    } else {
        openNav();
    }
}

// Agrego un "event listener" para abrir/cerrar la navegación al hacer clic en cualquier lugar
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-bars')) {
        toggleNav();
    } else if (event.target.classList.contains('fa-user')) {
        toggleNav(); // También se abre/cierra al hacer clic en el botón de usuario
    } else if (!event.target.closest('.navbar')) {
        closeNav();
    }
});


document.addEventListener('DOMContentLoaded', function () {

   // FUNCION PARA MOSTRAR U OCULTAR EL CARRITO DE COMPRAS
    const cartIcon = document.querySelector('.btn-cart');
    const modal = document.querySelector('.modal');
    const modalContainer = document.querySelector('.cart');
    let cartOpened = false;

    openModal = () => {
        modalContainer.style.height = '490px';
        cartOpened = true;
    };

    closeModal = () => {
        modalContainer.style.height = '0';
        cartOpened = false;
    };

    cartIcon.addEventListener('click', (e) => {
        if (cartOpened === false) {
            e.preventDefault();
            openModal();
        }
        else {
            closeModal();
        }

    });

    modal.addEventListener('click', (e) => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        closeNav();
    });

    /////////////////////////////
 // FUNCIONES PARA ABRIR Y CERRAR EL SEACHBAR
const glass = document.getElementById('ma-glass');
let searchBarOpened = false;

function openSearchBar() {
    searchBar.style.height = '80px';
    searchBarOpened = true;
    /// Al hacer clic en cualquier parte de la vista cierra la barra de busqueda y tambien el div generado con los resultados
    modal.addEventListener('click', (e) => {
        closeSearchBar();
        closeSearchResults();
    });
}

function closeSearchBar() {
    searchBar.style.height = '0';
    searchBarOpened = false;
}

glass.addEventListener('click', (e) => {
    if (searchBarOpened === false) {
        openSearchBar();
    }
});

modal.addEventListener('click', (e) => {
    closeSearchBar();
    closeSearchResults();
});

// FUNCIONES PARA PREVISUALIZAR PRODUCTOS EN LA BARRA DE BÚSQUEDA
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchInput.addEventListener('input', async () => {
    const query = searchInput.value;

    try {
        let url;
        if (query.trim() === '') {
            // busca con la palabra entera y haciendo un clic
            url = `/products/catalog/<%= brand %>?q=${query}`;
        } else {
            // busca en tiempo real
            url = `/api/products/search?q=${query}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        // limpio los resultados previos
        searchResults.innerHTML = '';

        if (data.length > 0) {
            const resultList = document.createElement('ul'); // creo una lista para almacenar los resultados
            data.forEach((result) => {
                const resultItem = document.createElement('li'); // itero sobre los resultados y creo un elemento de lista para cada uno
                const resultLink = document.createElement('a'); // genero un enlace para cada resultado
        
                // El texto del enlace sera el titulo del producto
                resultLink.textContent = result.title;
                resultLink.href = `/products/${result.id}/detail`; // genero el href del enlace
        
                resultItem.appendChild(resultLink); // agrego el enlace a cada elemento de la lista que hice mas arriba
                resultList.appendChild(resultItem); // agrego cada elemento a la lista creada mas arriba
            });
            searchResults.appendChild(resultList); // y ahora metemos la lista en el div de resultados creado en la vista
            searchResults.style.display = 'block';
        } else {
            // si la busqueda no devuelve nada que coincida ke avisamos al usuario
            searchResults.innerHTML = 'Su búsqueda no ha arrojado resultados.';
            searchResults.style.display = 'block';
        }
    } catch (error) {
        console.error('Error al realizar la solicitud AJAX:', error);
    }
});

// Función para cerrar los resultados en tiempo real
function closeSearchResults() {
    searchResults.style.display = 'none';
}

    //////////////////////////////////////
    // FUNCION PARA DESPLEGAR Y CERRAR EL NAV ///

    const dropContSmartphone = document.querySelector(".drop-cont-smartphone");
    const dropContSmartwatch = document.querySelector(".drop-cont-smartwatch");
    const dropContTablet = document.querySelector(".drop-cont-tablet");
    const smartwatch = document.querySelector(".smartwatch-nav");
    const smartphone = document.querySelector(".smartphone-nav");
    const tablet = document.querySelector(".tablet-nav");
    const dropdown = document.querySelector(".dropdown");
    const smartphoneDropdown = document.querySelector(".dropdown-smartphone");
    const smartwatchDropdown = document.querySelector(".dropdown-smartwatch");
    const tabletDropdown = document.querySelector(".dropdown-tablet");


    const hoverInSP = () => {
        dropContSmartphone.style.height = "170px";
        dropContSmartphone.style.opacity = "1";
        smartphoneDropdown.style.height = "auto";
        smartphoneDropdown.style.opacity = "1";
        searchBar.style.height = "0";
    }
    const hoverOutSP = () => {
        dropContSmartphone.style.height = "0";
        dropContSmartphone.style.opacity = "0";
        smartphoneDropdown.style.height = "0";
        smartphoneDropdown.style.opacity = "0";
    }

    const hoverInSW = () => {
        dropContSmartwatch.style.height = "170px";
        dropContSmartwatch.style.opacity = "1";
        smartwatchDropdown.style.height = "auto";
        smartwatchDropdown.style.opacity = "1";
        searchBar.style.height = "0";

    }
    const hoverOutSW = () => {
        dropContSmartwatch.style.height = "0";
        dropContSmartwatch.style.opacity = "0";
        smartwatchDropdown.style.height = "0";
        smartwatchDropdown.style.opacity = "0";
    }

    const hoverInT = () => {
        dropContTablet.style.height = "170px";
        dropContTablet.style.opacity = "1";
        tabletDropdown.style.height = "auto";
        tabletDropdown.style.opacity = "1";
        searchBar.style.height = "0";

    }
    const hoverOutT = () => {
        dropContTablet.style.height = "0";
        dropContTablet.style.opacity = "0";
        tabletDropdown.style.height = "0";
        tabletDropdown.style.opacity = "0";
    }

    smartphone.addEventListener('mouseenter', hoverInSP)
    dropContSmartphone.addEventListener('mouseenter', hoverInSP)
    smartphoneDropdown.addEventListener('mouseenter', hoverInSP)
    smartphone.addEventListener('mouseleave', hoverOutSP)
    dropContSmartphone.addEventListener('mouseleave', hoverOutSP)
    smartphoneDropdown.addEventListener('mouseleave', hoverOutSP)

    smartwatch.addEventListener('mouseenter', hoverInSW)
    dropContSmartwatch.addEventListener('mouseenter', hoverInSW)
    smartwatchDropdown.addEventListener('mouseenter', hoverInSW)
    smartwatch.addEventListener('mouseleave', hoverOutSW)
    dropContSmartwatch.addEventListener('mouseleave', hoverOutSW)
    smartwatchDropdown.addEventListener('mouseleave', hoverOutSW)

    tablet.addEventListener('mouseenter', hoverInT)
    dropContTablet.addEventListener('mouseenter', hoverInT)
    tabletDropdown.addEventListener('mouseenter', hoverInT)
    tablet.addEventListener('mouseleave', hoverOutT)
    dropContTablet.addEventListener('mouseleave', hoverOutT)
    tabletDropdown.addEventListener('mouseleave', hoverOutT)


});

