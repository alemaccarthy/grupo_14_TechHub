document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.btn-cart');
    const modal = document.querySelector('.modal');
    const modalContainer = document.querySelector('.cart');

    function openModal() {
        modalContainer.style.display = 'block';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    // window.addEventListener('click', (e) => {
    //     if (e.target === pirulo) {
    //         e.preventDefault();
    //         closeModal();
    //     }

    modal.addEventListener('click', (e) => {
        e.preventDefault();
            closeModal();      
    });

const deviceWidth = window.innerWidth;
const navbar = document.getElementById('list-nav-mobile');

openNav = () => {
    navbar.style.opacity = '1';
    if(deviceWidth < 768){
        navbar.style.width = '100%';
    }
    else if(deviceWidth >= 768){
        navbar.style.height = '130px';
        navbar.style.width = '180px';
    }
},

 closeNav = () => {
    navbar.style.opacity = '0';
    if(deviceWidth < 768){
        navbar.style.width = '0';
    }
    else if(deviceWidth >= 768){
        navbar.style.height = '0';
        navbar.style.width = '0';
    }
}
});



