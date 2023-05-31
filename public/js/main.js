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


/* document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('body :not(#searchbar-container)').addEventListener('click', () => {
        body
    })
})
 */


