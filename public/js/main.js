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

    const dropdownContainer = document.getElementById("dropdown-container");
    const smartwatch = document.querySelector(".smartwatch-nav");
    const smartphone = document.querySelector(".smartphone-nav");
    const tablet = document.querySelector(".tablet-nav");
    const dropdown = document.querySelector(".dropdown");
    const smartphoneDropdown = document.querySelector(".dropdown-smartphone");
    const smartwatchDropdown = document.querySelector(".dropdown-smartwatch");
    const tabletDropdown = document.querySelector(".dropdown-tablet");

    smartphone.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
        smartphoneDropdown.style.height = "auto";
        smartphoneDropdown.style.padding = "3vw 0 20px";
    });
    smartwatch.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
        smartwatchDropdown.style.height = "auto";
        smartwatchDropdown.style.padding = "3vw 0 20px";
    });
    tablet.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
        tabletDropdown.style.height = "auto";
        tabletDropdown.style.padding = "3vw 0 20px";
    });
    
    smartphoneDropdown.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
            smartphoneDropdown.style.height = "auto";
            smartphoneDropdown.style.padding = "3vw 0 20px";
    });
    smartwatchDropdown.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
            smartwatchDropdown.style.height = "auto";
            smartwatchDropdown.style.padding = "3vw 0 20px";
    });
    tabletDropdown.addEventListener("mouseenter", function () {
        dropdownContainer.style.height = "auto";
            tabletDropdown.style.height = "auto";
            tabletDropdown.style.padding = "3vw 0 20px";
    });
    

    smartphone.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        smartphoneDropdown.style.height = "0";
        smartphoneDropdown.style.padding = "0";
    })
    smartwatch.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        smartwatchDropdown.style.height = "0";
        smartwatchDropdown.style.padding = "0";
    })
    tablet.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        tabletDropdown.style.height = "0";
        tabletDropdown.style.padding = "0";
    })
    
    smartphoneDropdown.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        smartphoneDropdown.style.height = "0";
        smartphoneDropdown.style.padding = "0";
    })
    smartwatchDropdown.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        smartwatchDropdown.style.height = "0";
        smartwatchDropdown.style.padding = "0";
    })
    tabletDropdown.addEventListener("mouseleave", function () {
        dropdownContainer.style.height = "0";
        tabletDropdown.style.height = "0";
        tabletDropdown.style.padding = "0";
    })
});


/* document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('body :not(#searchbar-container)').addEventListener('click', () => {
        body
    })
})
 */


