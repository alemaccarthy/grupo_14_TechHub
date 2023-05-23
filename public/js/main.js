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
});

