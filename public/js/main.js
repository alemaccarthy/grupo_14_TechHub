document.addEventListener('DOMContentLoaded', function () {
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
            navbar.style.display = 'flex';
            navbar.style.opacity = '1';
        }
    }

    goBack = () => {
        window.history.back();
    }

    closeNav = () => {
        navbar.style.opacity = '0';
        if (deviceWidth < 768) {
            navbar.style.width = '0';
        }
        else if (deviceWidth >= 768) {
            navbar.style.display = 'none';
            navbar.style.opacity = '0';
        }
    }
    openForm = () => {
        document.getElementById("myForm").style.display = "block";
    }

    closeForm = () => {
        document.getElementById("myForm").style.display = "none";
    }
    /* 
            openLogIn = () => {
                userData = document.querySelector('.user-data');
                logInWindow.style.display = 'flex';
                userData.style.filter = 'blur(5px)';
            },
    
            closeLogIn = () => {
                userData = document.querySelector('.user-data');
                logInWindow.style.display = 'none';
                userData.style.filter = 'none';
            }, */
    const modal = document.querySelector('.modal'); /// REVISAR ESTO AL ORGANIZAR CODIGO YA QUE ESTE MISMO VALOR ES RECUPERADO EN LA FUNCION DEL CARRITO AL INICIO DEL MAIN.JS
    const glass = document.getElementById('ma-glass');
    let searchBarOpened = false;

    openSearchBar = () => {
        searchBar.style.height = '80px';
        searchBarOpened = true;
        modal.addEventListener('click', (e) => {
            closeSearchBar();
        });
    };

    closeSearchBar = () => {
        searchBar.style.height = '0';
        searchBarOpened = false;
    };

    glass.addEventListener('click', (e) => {
        if (searchBarOpened === false) {
            openSearchBar();
        }
    });

    modal.addEventListener('click', (e) => {
        closeSearchBar();
    });



    /*openSearchBar2 = () => {
        // const header = document.getElementById('header');
        searchBar.style.height = '80px';
        /*             todoMenosHeader.forEach(el => {
                        if (el != header) {
                            el.style.filter = 'blur(5px)';
                        }
                    }) */

    /*closeSearchBar2 = () => {
        searchBar.style.height = '0';
    }*/

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

document.addEventListener('DOMContentLoaded', function () {
    const colorsInput = document.getElementById('colors');
    const colorContainer = document.getElementById('colorInputsContainer');

    colorsInput.addEventListener('change', function () {
        const numColors = parseInt(this.value);

        if (numColors > 0) {
            colorContainer.style.display = 'flex';
            colorContainer.style.justifyContent = 'center';

        } else {
            colorContainer.style.display = 'none';
        }

        const colorInputs = colorContainer.getElementsByTagName('input');
        for (let i = 0; i < colorInputs.length; i++) {
            if (i < numColors) {
                colorInputs[i].style.display = 'flex';
            } else {
                colorInputs[i].style.display = 'none';
            }
        }
    });
});




/* document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('body :not(#searchbar-container)').addEventListener('click', () => {
        body
    })
})
 */

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');

            questions.forEach(q => {
                q.nextElementSibling.classList.remove('show');
                q.classList.remove('active');
            });

            if (!isOpen) {
                answer.classList.add('show');
                question.classList.add('active');
            }
        });

        question.addEventListener('mouseenter', () => {
            question.classList.add('underline');
        });

        question.addEventListener('mouseleave', () => {
            question.classList.remove('underline');
        });
    });
});


/*let selectedBrand = '';
document.addEventListener('DOMContentLoaded', function () {   
    const apple = document.getElementById('apple-link');
    const samsung = document.getElementById('samsung-link');

    const appleIcon = document.getElementById('home-1');
    const samsungIcon = document.getElementById('home-2');

    function handleClickApple() {
        selectedBrand = 'apple';
        document.cookie = `selectedBrand=${selectedBrand}; path=/`;        
    }

    function handleClickSamsung() {
        selectedBrand = 'samsung'
        document.cookie = `selectedBrand=${selectedBrand}; path=/`;
    }

    if (apple && samsung) {
        apple.addEventListener('click', handleClickApple);
        samsung.addEventListener('click', handleClickSamsung);
    }

    if (appleIcon && samsungIcon) {
        appleIcon.addEventListener('click', handleClickApple);
        samsungIcon.addEventListener('click', handleClickSamsung);
    }

});*////// REVISAR SI FUNCIONA COMO LO HICE ABAJO OK Y SI ES ASI BORRAR LA OPCION COMENTADA

let selectedBrand = '';

function handleClick(brand) {
    selectedBrand = brand;
    document.cookie = `selectedBrand=${selectedBrand}; path=/`;
}

document.addEventListener('DOMContentLoaded', function () {
    const apple = document.getElementById('apple-link');
    const samsung = document.getElementById('samsung-link');

    const appleIcon = document.getElementById('home-1');
    const samsungIcon = document.getElementById('home-2');

    if (apple && samsung) {
        apple.addEventListener('click', function () {
            handleClick('apple');
        });
        samsung.addEventListener('click', function () {
            handleClick('samsung');
        });
    }

    if (appleIcon && samsungIcon) {
        appleIcon.addEventListener('click', function () {
            handleClick('apple');
        });
        samsungIcon.addEventListener('click', function () {
            handleClick('samsung');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {

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


});

/// VER COMO IMPLEMENTARLO PARA QUE EL DELETEPROFILE SE EJECUTE LUEGO DE ESTO
/*function confirmDeleteProfile() {
    if (confirm('¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer.')) {
        const deleteForm = document.getElementById('deleteProfileForm');
        const deleteProfile = document.getElementById('deleteProfile');
        deleteProfile.value = 'true';
        deleteForm.action = '/user/profile?_method=delete';
        deleteForm.method = 'post';
        deleteForm.submit();
    }
}*/


/*document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.addToCart-button');

    addToCartButton.addEventListener('click', async function () {
        const productId = addToCartButton.getAttribute('data-product-id');
        console.log('ESTE ES EL ID DEL PRODUCTO AL CARRITO' + productId);
        try {
            const response = await fetch(`/user/add-to-cart/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al agregar al carrito');
            }

            const data = await response.json();
            updateCartModal(data.cartItemCount);

            // Obtener los detalles del producto agregado
            const product = data.addedProduct;
            addProductToCartView(product);
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
    });

    function updateCartModal(itemCount) {
        const cartItemCountElement = document.querySelector('.cart-item-count');
        if (cartItemCountElement) {
            cartItemCountElement.textContent = itemCount;
        }
    }

    function addProductToCartView(product) {
        const cartItemsContainer = document.querySelector('.cart-items');
        const itemHTML = `
            <article class="item">
                <img src="${product.images[0].path}" alt="">
                <div class="item-details">
                    <span class="item-title">${product.description}</span>
                    <div class="select-quantity">
                        <!-- Agregar los botones de cantidad aquí -->
                        <span class="item-price">$ ${product.price}<button class="no-border"><i class="fa-regular fa-trash-can remove-item"></i></button></span>
                    </div>
                </div>
            </article>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    }*/


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.addToCart-button');

    addToCartButton.addEventListener('click', async function () {

        const productId = addToCartButton.dataset.productId;
        console.log('ESTE ES EL ID DEL PRODUCTO AL CARRITO: ' + productId);

        try {
            const response = await fetch(`/user/add-to-cart/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al agregar al carrito');
            }

            const data = await response.json();
            updateCartModal(data.cartItemCount);

            // Obtener los detalles del producto agregado
            const product = data.addedProduct;
            addProductToCartView(product);
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
    });

    /*function updateCartModal(itemCount) {
        const cartItemCountElement = document.querySelector('.cart-item-count');
        if (cartItemCountElement) {
            cartItemCountElement.textContent = itemCount;
        }
    }
 
    function addProductToCartView(product) {
        // Aquí puedes agregar el código para mostrar el producto en la ventana modal del carrito
    }*/
});


/*function updateCartModal(itemCount) {
    const cartItemCountElement = document.querySelector('.cart-item-count');
    if (cartItemCountElement) {
        cartItemCountElement.textContent = itemCount;
    }
}
 
function addProductToCartView(product) {
    // Aquí puedes agregar el código para mostrar el producto en la ventana modal del carrito
}*/

document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("profile-image");
    const previewImage = document.getElementById("preview-image");

    imageInput.addEventListener("change", function () {
        const selectedFile = imageInput.files[0];

        if (selectedFile) {
            previewImage.style.display = "block";
            previewImage.src = URL.createObjectURL(selectedFile);
        } else {
            previewImage.style.display = "none";
            previewImage.src = "#";
        }
    });

    /*const profileForm = document.getElementById("profile-form");
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });*/
});

// validaciones del formulario de creacion de productos
window.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#product-form');
    const title = document.querySelector('#title');
    const brand = document.querySelector('#brand');
    const description = document.querySelector('#description');
    const price = document.querySelector('#price');
    const category = document.querySelector('#category');
    const images = document.querySelector('#images');
    const colors = document.getElementsByClassName('color-label');
    const colorCheckboxes = document.querySelectorAll('.color-label input[type="checkbox"]');

    const error = document.querySelector('#error');


    title.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar un titulo al producto';
        } else {
            e.target.nextElementSibling.innerHTML = '';
        }
    }

    form.addEventListener('submit', function (e) {

        if (brand.value === '') {
            e.preventDefault();
            error.textContent = 'Debes seleccionar una marca para el producto';
            
            // Realizar un desplazamiento suave hacia arriba
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (category.value === '') {
            e.preventDefault();
            category.nextElementSibling.textContent = 'Debes seleccionar una categoría';
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    
        // Verificar selección de colores
        const selectedColors = Array.from(colorCheckboxes).filter(checkbox => checkbox.checked);
        if (selectedColors.length === 0) {
            e.preventDefault();
            const colorError = document.querySelector('.pick-colors #error');
            colorError.textContent = 'Debes seleccionar al menos un color';
        }
    });
    
    description.onblur = function (e) {
        if (e.target.value.trim() === '') {
            e.target.nextElementSibling.textContent = 'Debes agregar una descripción al producto';
        }
    };

    price.onblur = (e) => {
        let priceValue = parseFloat(e.target.value);
        if (priceValue <= 0) {
            e.target.nextElementSibling.textContent = 'El precio debe ser mayor a 0';
        } else if (isNaN(priceValue)) {
            e.target.nextElementSibling.textContent = 'Debes ingresar un precio válido';
        }

        else {
            e.target.nextElementSibling.textContent = '';
        }
    }

    images.onchange = (e) => {
        const files = e.target.files;

        if (files.length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes seleccionar al menos una imagen';
        } else {
            // Verificar si cada archivo es una imagen
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
            const invalidFiles = Array.from(files).filter(file => {
                const fileExtension = file.name.split('.').pop().toLowerCase();
                return !allowedExtensions.includes(fileExtension);
            });

            if (invalidFiles.length > 0) {
                e.target.nextElementSibling.innerHTML = 'Debes seleccionar solo archivos de imagen válidos (jpg, jpeg, png)';
            } else {
                e.target.nextElementSibling.innerHTML = '';
            }
        }
    }
})

// Validaciones de registro de usuarios
/* window.addEventListener('DOMContentLoaded', function () {

    const nombres = document.querySelector('#nombres');
    const apellido = document.querySelector('#apellido');
    const correo = document.querySelector('#correo');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$*&])[A-Za-z\d#$*&]{6,}$/; // Expresión regular que permite al menos 6 caracteres, una mayúscula y un símbolo (#, $, *, &)
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dni = document.querySelector('#dni');
    const street = document.querySelector('#street');
    const number = document.querySelector('#number');
    const floor = document.querySelector('#floor');
    const door = document.querySelector('#door');
    const city = document.querySelector('#city');
    const province = document.querySelector('#province');
    const postalCode = document.querySelector('#postalcode');
    const telephone = document.querySelector('#telephone');
    const telephoneRegex = /^\d+$/; // Expresión regular que permite solo números

    nombres.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu nombre o nombres';
            errorElement.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }

    apellido.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu apellido';
            errorElement.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    correo.onblur = (e) => {
        
        if (!emailRegex.test(correo.value)) {
            e.preventDefault();
            correo.nextElementSibling.textContent = 'Ingresa un correo electrónico válido';
            errorElement.style.display = 'block';
        } else {
            correo.nextElementSibling.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    const validatePassword = () => {
        const errorElement = password.nextElementSibling;
        if (!passwordRegex.test(password.value)) {
            errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un símbolo (#, $, *, &)';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    };
    
    const validateConfirmPassword = () => {
        const errorElement = confirmPassword.nextElementSibling;
        if (password.value !== confirmPassword.value) {
            errorElement.textContent = 'Las contraseñas no coinciden';
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return true;
        }
    };
    
    password.addEventListener('blur', validatePassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);
    
    password.addEventListener('input', () => {
        if (passwordRegex.test(password.value)) {
            password.nextElementSibling.textContent = '';
            password.nextElementSibling.style.display = 'none';
        }
    });
    
    confirmPassword.addEventListener('input', () => {
        if (password.value === confirmPassword.value) {
            confirmPassword.nextElementSibling.textContent = '';
            confirmPassword.nextElementSibling.style.display = 'none';
        }
    });
    
    dni.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar tu DNI';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    

    street.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar una calle valida';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    number.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar una altura';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    floor.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar un piso';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    door.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar un departamento';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    city.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar tu ciudad';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    province.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar tu provincia';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    postalCode.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar tu codigo postal';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }
    
    telephone.onblur = (e) => {
        const length = e.target.value.length;
        const errorElement = e.target.nextElementSibling;
        if (length === 0) {
            errorElement.innerHTML = 'Debes ingresar tu número de teléfono';
            errorElement.style.display = 'block';
        } else {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }

    

}); */

window.addEventListener('DOMContentLoaded', function () {

    const nombres = document.querySelector('#nombres');
    const apellido = document.querySelector('#apellido');
    const correo = document.querySelector('#correo');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$*&])[A-Za-z\d#$*&]{6,}$/;
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const dni = document.querySelector('#dni');
    const street = document.querySelector('#street');
    const number = document.querySelector('#number');
    const floor = document.querySelector('#floor');
    const door = document.querySelector('#door');
    const city = document.querySelector('#city');
    const province = document.querySelector('#province');
    const postalCode = document.querySelector('#postalcode');
    const telephone = document.querySelector('#telephone');
    const telephoneRegex = /^\d+$/;

    // Función para agregar validación en tiempo real
    const addRealTimeValidation = (element, validationFunction) => {
        element.addEventListener('input', () => {
            validationFunction(element);
        });
        element.addEventListener('blur', () => {
            validationFunction(element);
        });
    }

    // Agregar validación en tiempo real a cada campo
    addRealTimeValidation(nombres, validateNames);
    addRealTimeValidation(apellido, validateLastName);
    addRealTimeValidation(correo, validateMail);
    addRealTimeValidation(password, validatePassword);
    addRealTimeValidation(confirmPassword, validateConfirmPassword);
    addRealTimeValidation(dni, validateDni);
    addRealTimeValidation(street, validateStreet);
    addRealTimeValidation(number, validateNumber);
    addRealTimeValidation(floor, validateFloor);
    addRealTimeValidation(door, validateDoor);
    addRealTimeValidation(city, validateCity);
    addRealTimeValidation(province, validateProvince);
    addRealTimeValidation(postalCode, validatePostalCode);
    addRealTimeValidation(telephone, validateTelephone);

    // Función para mostrar mensajes de error
    const showError = (element, message) => {
        const errorElement = element.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Función para ocultar mensajes de error
    const hideError = (element) => {
        const errorElement = element.nextElementSibling;
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function validateNames(element) {
        const length = element.value.length;
        if (length < 2) {
            showError(element, 'Debes ingresar al menos 2 caracteres');
        } else {
            hideError(element);
        }
    }

    function validateLastName(element) {
        const length = element.value.length;
        if (length < 2) {
            showError(element, 'Debes ingresar al menos 2 caracteres');
        } else {
            hideError(element);
        }
    }

    function validateMail(element) {
        if (!emailRegex.test(element.value)) {
            showError(element, 'Ingresa un correo electrónico válido');
        } else {
            hideError(element);
        }
    }

    function validatePassword(element) {
        if (!passwordRegex.test(element.value)) {
            showError(element, 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un símbolo (#, $, *, &)');
        } else {
            hideError(element);
        }
    }

    function validateConfirmPassword(element) {
        if (password.value !== element.value) {
            showError(element, 'Las contraseñas no coinciden');
        } else {
            hideError(element);
        }
    }

    function validateDni(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar tu DNI');
        } else {
            hideError(element);
        }
    }

    function validateStreet(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar una calle válida');
        } else {
            hideError(element);
        }
    }

    function validateNumber(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar una altura');
        } else {
            hideError(element);
        }
    }

    function validateFloor(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar un piso');
        } else {
            hideError(element);
        }
    }

    function validateDoor(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar un departamento');
        } else {
            hideError(element);
        }
    }

    function validateCity(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar tu ciudad');
        } else {
            hideError(element);
        }
    }

    function validateProvince(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar tu provincia');
        } else {
            hideError(element);
        }
    }

    function validatePostalCode(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar tu código postal');
        } else {
            hideError(element);
        }
    }

    function validateTelephone(element) {
        const length = element.value.length;
        if (length === 0) {
            showError(element, 'Debes ingresar tu número de teléfono');
        } else if (!telephoneRegex.test(element.value)) {
            showError(element, 'Ingresa solo números en tu número de teléfono');
        } else {
            hideError(element);
        }
    }

});
