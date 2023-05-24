document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.btn-cart');
    const modal = document.querySelector('.modal');
    const modalContainer = document.querySelector('.cart');

    function openModal() {
        modalContainer.style.height = '490px';
    }

    function closeModal() {
        modalContainer.style.height = '0';
    }

    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    modal.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

});

document.addEventListener('DOMContentLoaded', function () {

    const deviceWidth = window.innerWidth;
    const navbar = document.getElementById('right-floating-nav');
    const logInWindow = document.getElementById('log-in-window');
    const searchBar = document.getElementById('searchbar-container');
    const body = document.body;
    // const todoMenosHeader = document.querySelectorAll('body');

    openNav = () => {
        navbar.style.opacity = '1';
        if (deviceWidth < 768) {
            navbar.style.width = '100%';
        }
        else if (deviceWidth >= 768) {
            navbar.style.height = '130px';
            navbar.style.width = '180px';
        }
    },

        closeNav = () => {
            navbar.style.opacity = '0';
            if (deviceWidth < 768) {
                navbar.style.width = '0';
            }
            else if (deviceWidth >= 768) {
                navbar.style.height = '0';
                navbar.style.width = '0';
            }
        },

        openLogIn = () => {
            logInWindow.style.display = 'flex';
        },

        closeLogIn = () => {
            logInWindow.style.display = 'none';
        },
        openSearchBar = () => {
            // const header = document.getElementById('header');
            searchBar.style.height = '80px';
/*             todoMenosHeader.forEach(el => {
                if (el != header) {
                    el.style.filter = 'blur(5px)';
                }
            }) */
        },
        closeSearchBar = () => {
            searchBar.style.height = '0';
        }
})


document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('body :not(#searchbar-container)').addEventListener('click', () => {
        body
    })
})



