
/// FUNCION PARA PERMITIR QUE AL CLICKEAR SOBRE IMAGEN DEL SLIDER DE DETALLE DE PRODUCTO PASE A SER PRINCIPAL
const changeImage = (newSrc) => {
    const mainImg = document.querySelector('.main-img');
    mainImg.src = newSrc;

    const slider = document.querySelector('.small-imgs-slider');

    slider.removeChild(clickedImg);
    slider.insertBefore(clickedImg, slider.firstChild);

}





document.addEventListener('DOMContentLoaded', function () {
    updateColorQuantity();
    /// FUNCION PARA DETERMINAR CANTIDAD DE COLORES SELECCIONADOS EN UN INPUT OCULTO DEL FORMULARIO
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateColorQuantity);
    });

    function updateColorQuantity() {
        // Obtener la cantidad de checkboxes seleccionados
        const selectedColors = document.querySelectorAll('input[type="checkbox"]:checked');
        const colorQuantityInput = document.getElementById('color_quantity');

        // Actualizar el valor del input color_quantity con la cantidad de colores seleccionados
        colorQuantityInput.value = selectedColors.length;
    }

    ////////////////////////////////////////////

    ///VALIDACIONES DEL LADO DEL CLIENTE PARA CREACION DE PRODUCTOS
    const form = document.querySelector('#product-form');
    const title = document.querySelector('#title');
    const brand = document.querySelector('#brand');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');
    const category = document.querySelector('#category');
    const images = document.querySelector('#images');
    const colorCheckboxes = document.querySelectorAll('.color-label input[type="checkbox"]');
    const colorQuantity = document.querySelector('#color_quantity');
    const error = document.querySelector('#error');

    // Función para comprobar la validez del formulario
    const checkFormValidity = () => {
        let formValid = false;
        const requiredFields = [title, brand, description, price, category];
        const selectedColors = Array.from(colorCheckboxes).filter(checkbox => checkbox.checked).length;
        const imageCount = images.files.length;

        // Comprobamos si todos los campos requeridos están completos
        const allFieldsCompleted = requiredFields.every(field => field.value.trim() !== '');

        // Comprobamos si al menos una imagen está seleccionada
        const atLeastOneImage = imageCount > 0;

        // Comprobamos si al menos un color está seleccionado
        const atLeastOneColor = selectedColors > 0;

        // La validación será exitosa si todos los campos requeridos están completos
        // y al menos una imagen y un color están seleccionados
        formValid = allFieldsCompleted && atLeastOneImage && atLeastOneColor;
    };

    /*form.addEventListener('submit', function (e) {
        if (!formValid) {
            e.preventDefault();
            alert('Por favor, completa todos los campos requeridos y selecciona al menos una imagen y un color.') ;
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });*/

    title.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar un titulo al producto';
        } else {
            e.target.nextElementSibling.innerHTML = '';
        }
        checkFormValidity();
    }

    brand.onblur = () => {
        if (brand.value === '') {
            brand.nextElementSibling.textContent = 'Debes seleccionar una marca para el producto';
        } else {
            brand.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    };

    category.onblur = () => {
        if (category.value === '') {
            category.nextElementSibling.textContent = 'Debes seleccionar una categoria para el producto';
        } else {
            category.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    };

    description.onblur = () => {
        if (description.value === '') {
            description.nextElementSibling.textContent = 'Debes agregar una descripcion para el producto';
        } else {
            description.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    };

    price.onblur = () => {
        if (price.value === '') {
            price.nextElementSibling.textContent = 'Debes elegir un precio para el producto';
        } else {
            price.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    };

    // Agrega el evento de cambio de imágenes para realizar validaciones en tiempo real
    images.addEventListener('change', () => {
        const imageCount = images.files.length;
        if (imageCount === 0) {
            images.nextElementSibling.textContent = 'Debes seleccionar al menos una imagen';
        } else {
            images.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    });

    // Agrega el evento de cambio de colores para realizar validaciones en tiempo real
    colorQuantity.addEventListener('change', () => {
        const selectedColors = Array.from(colorCheckboxes).filter(checkbox => checkbox.checked).length;
        if (selectedColors === 0) {
            colorQuantity.nextElementSibling.textContent = 'Debes seleccionar al menos un color';
        } else {
            colorQuantity.nextElementSibling.textContent = '';
        }
        checkFormValidity();
    });

    //// MANIPULA EL ACTION DEL FORMULARIO DE UPDATE/DELETE PRODUCT EN VISTA UPDATE PARA PODER TENER LOS 3 BOTONES EN UN MISMO CONTENEDOR Y FACILITAR ESTILOS
    const setAction = (actionType, productId) => {
        const formUpdate = document.querySelector('.form-update');
        const formDelete = document.querySelector('.form-delete');

        if (actionType === 'update') {
            formUpdate.action = `/products/${productId}/update?_method=put`;
            formUpdate.enctype = 'multipart/form-data';
        } else if (actionType === 'delete') {
            formDelete.action = `/products/${productId}/delete?_method=delete`;
        }
    }







});