let selectedBrand = '';

function handleClick(selectedBrand) {
    brand = selectedBrand;
    document.cookie = `selectedBrand=${selectedBrand}; path=/`;
    document.cookie = `brand=${brand}; path=/`;
}

document.addEventListener('DOMContentLoaded', function () {
    const apple = document.getElementById('apple-link');
    const samsung = document.getElementById('samsung-link');

    const appleIcon = document.querySelector('.apple');
    const samsungIcon = document.querySelector('.samsung');

    if (apple && samsung) {
        apple.onclick = function () {
            handleClick('apple');
        };
        samsung.onclick = function () {
            handleClick('samsung');
        };
    }

    if (appleIcon && samsungIcon) {
        appleIcon.onclick = function () {
            handleClick('apple');
        }
        samsungIcon.onclick = function () {
            handleClick('samsung');
        }
    }
});




//     const cartIcon = document.querySelector('.btn-cart');
//     const modal = document.querySelector('.modal');
//     const modalContainer = document.querySelector('.cart');
//     let cartOpened = false;

//     openModal = () => {
//         modalContainer.style.height = '490px';
//         cartOpened = true;
//     };

//     closeModal = () => {
//         modalContainer.style.height = '0';
//         cartOpened = false;
//     };

//     cartIcon.addEventListener('click', (e) => {
//         if (cartOpened === false) {
//             e.preventDefault();
//             openModal();
//         }
//         else {
//             closeModal();
//         }

//     });

//     modal.addEventListener('click', (e) => {
//         closeModal();
//     });

// });


// document.addEventListener('DOMContentLoaded', function () {

    // const deviceWidth = window.innerWidth;
    // const navbar = document.getElementById('right-floating-nav');
    // const logInWindow = document.getElementById('log-in-window');
    // const searchBar = document.getElementById('searchbar-container');
    // const body = document.body;
    // // const todoMenosHeader = document.querySelectorAll('body');

    // openNav = () => {
    //     navbar.style.opacity = '1';
    //     if (deviceWidth < 768) {
    //         navbar.style.width = '100%';
    //     }
    //     else if (deviceWidth >= 768) {
    //         navbar.style.display = 'flex';
    //         navbar.style.opacity = '1';
    //     }
    // }

    // goBack = () => {
    //     window.history.back();
    // }

    // closeNav = () => {
    //     navbar.style.opacity = '0';
    //     if (deviceWidth < 768) {
    //         navbar.style.width = '0';
    //     }
    //     else if (deviceWidth >= 768) {
    //         navbar.style.display = 'none';
    //         navbar.style.opacity = '0';
    //     }
    // }
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
    // const modal = document.querySelector('.modal'); /// REVISAR ESTO AL ORGANIZAR CODIGO YA QUE ESTE MISMO VALOR ES RECUPERADO EN LA FUNCION DEL CARRITO AL INICIO DEL MAIN.JS
    // const glass = document.getElementById('ma-glass');
    // let searchBarOpened = false;

    // openSearchBar = () => {
    //     searchBar.style.height = '80px';
    //     searchBarOpened = true;
    //     modal.addEventListener('click', (e) => {
    //         closeSearchBar();
    //     });
    // };

    // closeSearchBar = () => {
    //     searchBar.style.height = '0';
    //     searchBarOpened = false;
    // };

    // glass.addEventListener('click', (e) => {
    //     if (searchBarOpened === false) {
    //         openSearchBar();
    //     }
    // });

    // modal.addEventListener('click', (e) => {
    //     closeSearchBar();
    // });


            /// ESTO ES UN BIS QUE YA ESTABA COMENTADO DE ANTES
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

    // const dropContSmartphone = document.querySelector(".drop-cont-smartphone");
    // const dropContSmartwatch = document.querySelector(".drop-cont-smartwatch");
    // const dropContTablet = document.querySelector(".drop-cont-tablet");
    // const smartwatch = document.querySelector(".smartwatch-nav");
    // const smartphone = document.querySelector(".smartphone-nav");
    // const tablet = document.querySelector(".tablet-nav");
    // const dropdown = document.querySelector(".dropdown");
    // const smartphoneDropdown = document.querySelector(".dropdown-smartphone");
    // const smartwatchDropdown = document.querySelector(".dropdown-smartwatch");
    // const tabletDropdown = document.querySelector(".dropdown-tablet");


    // const hoverInSP = () => {
    //     dropContSmartphone.style.height = "170px";
    //     dropContSmartphone.style.opacity = "1";
    //     smartphoneDropdown.style.height = "auto";
    //     smartphoneDropdown.style.opacity = "1";
    //     searchBar.style.height = "0";
    // }
    // const hoverOutSP = () => {
    //     dropContSmartphone.style.height = "0";
    //     dropContSmartphone.style.opacity = "0";
    //     smartphoneDropdown.style.height = "0";
    //     smartphoneDropdown.style.opacity = "0";
    // }

    // const hoverInSW = () => {
    //     dropContSmartwatch.style.height = "170px";
    //     dropContSmartwatch.style.opacity = "1";
    //     smartwatchDropdown.style.height = "auto";
    //     smartwatchDropdown.style.opacity = "1";
    //     searchBar.style.height = "0";

    // }
    // const hoverOutSW = () => {
    //     dropContSmartwatch.style.height = "0";
    //     dropContSmartwatch.style.opacity = "0";
    //     smartwatchDropdown.style.height = "0";
    //     smartwatchDropdown.style.opacity = "0";
    // }

    // const hoverInT = () => {
    //     dropContTablet.style.height = "170px";
    //     dropContTablet.style.opacity = "1";
    //     tabletDropdown.style.height = "auto";
    //     tabletDropdown.style.opacity = "1";
    //     searchBar.style.height = "0";

    // }
    // const hoverOutT = () => {
    //     dropContTablet.style.height = "0";
    //     dropContTablet.style.opacity = "0";
    //     tabletDropdown.style.height = "0";
    //     tabletDropdown.style.opacity = "0";
    // }

    // smartphone.addEventListener('mouseenter', hoverInSP)
    // dropContSmartphone.addEventListener('mouseenter', hoverInSP)
    // smartphoneDropdown.addEventListener('mouseenter', hoverInSP)
    // smartphone.addEventListener('mouseleave', hoverOutSP)
    // dropContSmartphone.addEventListener('mouseleave', hoverOutSP)
    // smartphoneDropdown.addEventListener('mouseleave', hoverOutSP)

    // smartwatch.addEventListener('mouseenter', hoverInSW)
    // dropContSmartwatch.addEventListener('mouseenter', hoverInSW)
    // smartwatchDropdown.addEventListener('mouseenter', hoverInSW)
    // smartwatch.addEventListener('mouseleave', hoverOutSW)
    // dropContSmartwatch.addEventListener('mouseleave', hoverOutSW)
    // smartwatchDropdown.addEventListener('mouseleave', hoverOutSW)

    // tablet.addEventListener('mouseenter', hoverInT)
    // dropContTablet.addEventListener('mouseenter', hoverInT)
    // tabletDropdown.addEventListener('mouseenter', hoverInT)
    // tablet.addEventListener('mouseleave', hoverOutT)
    // dropContTablet.addEventListener('mouseleave', hoverOutT)
    // tabletDropdown.addEventListener('mouseleave', hoverOutT)
//});

//// ESTA FUNCION YA NO ESTABA EN USO ME PARECE. ESTABA DESTINADA A UN ENFOQUE DISTINTO DEL FINALMENTE ADOPTADO PARA MOSTRAR LOS COLORES
// document.addEventListener('DOMContentLoaded', function () {
//     const colorsInput = document.getElementById('colors');
//     const colorContainer = document.getElementById('colorInputsContainer');

//     colorsInput.addEventListener('change', function () {
//         const numColors = parseInt(this.value);

//         if (numColors > 0) {
//             colorContainer.style.display = 'flex';
//             colorContainer.style.justifyContent = 'center';

//         } else {
//             colorContainer.style.display = 'none';
//         }

//         const colorInputs = colorContainer.getElementsByTagName('input');
//         for (let i = 0; i < colorInputs.length; i++) {
//             if (i < numColors) {
//                 colorInputs[i].style.display = 'flex';
//             } else {
//                 colorInputs[i].style.display = 'none';
//             }
//         }
//     });
// });



/// ESTO YA ESTABA COMENTADO DE ANTES
/* document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('body :not(#searchbar-container)').addEventListener('click', () => {
        body
    })
})
 */


// document.addEventListener('DOMContentLoaded', function () {
//     const questions = document.querySelectorAll('.question');

//     questions.forEach(question => {
//         question.addEventListener('click', () => {
//             const answer = question.nextElementSibling;
//             const isOpen = question.classList.contains('active');

//             questions.forEach(q => {
//                 q.nextElementSibling.classList.remove('show');
//                 q.classList.remove('active');
//             });

//             if (!isOpen) {
//                 answer.classList.add('show');
//                 question.classList.add('active');
//             }
//         });

//         question.addEventListener('mouseenter', () => {
//             question.classList.add('underline');
//         });

//         question.addEventListener('mouseleave', () => {
//             question.classList.remove('underline');
//         });
//     });
// });

/// FUNCION PARA OBTENER EL VALOR DE LA MARCA SELECCIONADA Y GUARDARLO EN UNA COOKIE


// document.addEventListener('DOMContentLoaded', function () {

//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', updateColorQuantity);
//     });

//     function updateColorQuantity() {
//         // Obtener la cantidad de checkboxes seleccionados
//         const selectedColors = document.querySelectorAll('input[type="checkbox"]:checked');
//         const colorQuantityInput = document.getElementById('color_quantity');

//         // Actualizar el valor del input color_quantity con la cantidad de colores seleccionados
//         colorQuantityInput.value = selectedColors.length;
//     }


// });


/// ESTO NO ESTA EN USO PORQUE ERA PARA EL CARRITO
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

/// TAMPOCO EN USO YA QUE ERA OTRO ENFOQUE PARA MANIPULAR CARRITO
// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButton = document.querySelector('.addToCart-button');

//     addToCartButton.addEventListener('click', async function () {

//         const productId = addToCartButton.dataset.productId;
//         console.log('ESTE ES EL ID DEL PRODUCTO AL CARRITO: ' + productId);

//         try {
//             const response = await fetch(`/user/add-to-cart/${productId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error('Error al agregar al carrito');
//             }

//             const data = await response.json();
//             updateCartModal(data.cartItemCount);

//             // Obtener los detalles del producto agregado
//             const product = data.addedProduct;
//             addProductToCartView(product);
//         } catch (error) {
//             console.error('Error al agregar al carrito:', error);
//         }
//     });

    /*function updateCartModal(itemCount) {
        const cartItemCountElement = document.querySelector('.cart-item-count');
        if (cartItemCountElement) {
            cartItemCountElement.textContent = itemCount;
        }
    }
 
    function addProductToCartView(product) {
        // Aquí puedes agregar el código para mostrar el producto en la ventana modal del carrito
    
});}*/


/*function updateCartModal(itemCount) {
    const cartItemCountElement = document.querySelector('.cart-item-count');
    if (cartItemCountElement) {
        cartItemCountElement.textContent = itemCount;
    }
}
 
function addProductToCartView(product) {
    // Aquí puedes agregar el código para mostrar el producto en la ventana modal del carrito
}*/

/// FUNCION PARA MANIPULAR COMO SE MUESTRA AL CARGAR LA IMAGEN DE PERFIL DE USUARIO Y ESTABLECER UNA IMAGEN POR DEFECTO
// document.addEventListener("DOMContentLoaded", function () {
//     const imageInput = document.getElementById("profile-image");
//     const previewImage = document.getElementById("preview-image");

//     imageInput.addEventListener("change", function () {
//         const selectedFile = imageInput.files[0];

//         if (selectedFile) {
//             previewImage.style.display = "block";
//             previewImage.src = URL.createObjectURL(selectedFile);
//         } else {
//             previewImage.style.display = "none";
//             previewImage.src = "#";
//         }
//     });

//     /*const profileForm = document.getElementById("profile-form");
//     profileForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//     });*/
// });



// window.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('#product-form');
//     const title = document.querySelector('#title');
//     const brand = document.querySelector('#brand');
//     const description = document.querySelector('#description');
//     const price = document.querySelector('#price');
//     const category = document.querySelector('#category');
//     const images = document.querySelector('#images');
//     const colorCheckboxes = document.querySelectorAll('.color-label input[type="checkbox"]');
//     const colorQuantity = document.querySelector('#color_quantity');
//     const error = document.querySelector('#error');
//     let formValid = false;

//     // Función para comprobar la validez del formulario
//     const checkFormValidity = () => {
//         const requiredFields = [title, brand, description, price, category];
//         const selectedColors = Array.from(colorCheckboxes).filter(checkbox => checkbox.checked).length;
//         const imageCount = images.files.length;

//         // Comprobamos si todos los campos requeridos están completos
//         const allFieldsCompleted = requiredFields.every(field => field.value.trim() !== '');

//         // Comprobamos si al menos una imagen está seleccionada
//         const atLeastOneImage = imageCount > 0;

//         // Comprobamos si al menos un color está seleccionado
//         const atLeastOneColor = selectedColors > 0;

//         // La validación será exitosa si todos los campos requeridos están completos
//         // y al menos una imagen y un color están seleccionados
//         formValid = allFieldsCompleted && atLeastOneImage && atLeastOneColor;
//     };

//     /*form.addEventListener('submit', function (e) {
//         if (!formValid) {
//             e.preventDefault();
//             alert('Por favor, completa todos los campos requeridos y selecciona al menos una imagen y un color.') ;
            
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }
//     });*/

//     title.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar un titulo al producto';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//         }
//         checkFormValidity();
//     }

//     brand.onblur = () => {
//         if (brand.value === '') {
//             brand.nextElementSibling.textContent = 'Debes seleccionar una marca para el producto';
//         } else {
//             brand.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     };

//     category.onblur = () => {
//         if (category.value === '') {
//             category.nextElementSibling.textContent = 'Debes seleccionar una categoria para el producto';
//         } else {
//             category.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     };

//     description.onblur = () => {
//         if (description.value === '') {
//             description.nextElementSibling.textContent = 'Debes agregar una descripcion para el producto';
//         } else {
//             description.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     };

//     price.onblur = () => {
//         if (price.value === '') {
//             price.nextElementSibling.textContent = 'Debes elegir un precio para el producto';
//         } else {
//             price.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     };

//     // Agrega el evento de cambio de imágenes para realizar validaciones en tiempo real
//     images.addEventListener('change', () => {
//         const imageCount = images.files.length;
//         if (imageCount === 0) {
//             images.nextElementSibling.textContent = 'Debes seleccionar al menos una imagen';
//         } else {
//             images.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     });

//     // Agrega el evento de cambio de colores para realizar validaciones en tiempo real
//     colorQuantity.addEventListener('change', () => {
//         const selectedColors = Array.from(colorCheckboxes).filter(checkbox => checkbox.checked).length;
//         if (selectedColors === 0) {
//             colorQuantity.nextElementSibling.textContent = 'Debes seleccionar al menos un color';
//         } else {
//             colorQuantity.nextElementSibling.textContent = '';
//         }
//         checkFormValidity();
//     });
// });


// Validaciones de registro de usuarios
// window.addEventListener('DOMContentLoaded', function () {
//     const name = document.querySelector('#nombres');
//     const lastName = document.querySelector('#apellido');
//     const email = document.querySelector('#correo');
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$&*]).{6,}$/;
//     const password = document.querySelector('#password');
//     const confirmPassword = document.querySelector('#confirm-password');
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     const dni = document.querySelector('#dni');
//     const street = document.querySelector('#street');
//     const number = document.querySelector('#number');
//     const floor = document.querySelector('#floor');
//     const door = document.querySelector('#door');
//     const city = document.querySelector('#city');
//     const province = document.querySelector('#province');
//     const postalCode = document.querySelector('#postalcode');
//     const telephone = document.querySelector('#telephone');
//     const telephoneRegex = /^\+549\d+$/;
//     let formValid = false;
//     let fieldsValidated = 0;
//     const totalFields = 14;

//     const checkFormValidity = () => {
//         if (fieldsValidated === totalFields) {
//             formValid = true;
//         } else {
//             formValid = false;
//         }
//     };

//     name.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.textContent = 'Debes ingresar tu nombre o nombres';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.textContent = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     lastName.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.textContent = 'Debes ingresar tu apellido';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     email.onblur = (e) => {
//         if (!emailRegex.test(email.value)) {
//             e.preventDefault();
//             email.nextElementSibling.textContent = 'Ingresa un correo electrónico válido';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             email.nextElementSibling.textContent = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     password.onblur = (e) => {
//         const errorElement = password.nextElementSibling;
//         const confirmPasswordValue = confirmPassword.value;
//         const passwordValue = password.value;
    
//         if (passwordValue.length < 6) {
//             e.preventDefault();
//             errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres';
//             errorElement.style.display = 'block';
//         } else if (!passwordRegex.test(passwordValue)) {
//             e.preventDefault();
//             errorElement.textContent = 'La contraseña debe contener al menos 1 minúscula, 1 mayúscula y 1 símbolo (#, $, *, &)';
//             errorElement.style.display = 'block';
//         } else if (confirmPasswordValue !== '' && confirmPasswordValue !== passwordValue) {
//             const confirmErrorElement = confirmPassword.nextElementSibling;
//             confirmErrorElement.textContent = 'Las contraseñas no coinciden';
//             confirmErrorElement.style.display = 'block';
//         } else {
//             errorElement.textContent = '';
//             errorElement.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     };
    
//     confirmPassword.onblur = (e) => {
//         const errorElement = confirmPassword.nextElementSibling;
//         const confirmPasswordValue = confirmPassword.value;
//         const passwordValue = password.value;
    
//         if (passwordValue !== confirmPasswordValue) {
//             e.preventDefault();
//             errorElement.textContent = 'Las contraseñas no coinciden';
//             errorElement.style.display = 'block';
//         } else {
//             errorElement.textContent = '';
//             errorElement.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     };
    

//     dni.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar tu DNI';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     street.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar una calle válida';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     number.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar una altura';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     floor.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar un piso';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     door.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar un departamento';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     city.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar tu ciudad';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     province.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar tu provincia';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     postalCode.onblur = (e) => {
//         const length = e.target.value.length;
//         if (length === 0) {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar tu código postal';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     telephone.onblur = (e) => {
//         const value = e.target.value.trim(); // Eliminamos espacios en blanco al inicio y al final
//         if (value === '') {
//             e.target.nextElementSibling.innerHTML = 'Debes ingresar tu número de teléfono';
//             e.target.nextElementSibling.style.display = 'block';
//         } else if (!telephoneRegex.test(value)) {
//             e.target.nextElementSibling.innerHTML = 'El número de teléfono debe comenzar con +549 y contener solo números';
//             e.target.nextElementSibling.style.display = 'block';
//         } else {
//             e.target.nextElementSibling.innerHTML = '';
//             e.target.nextElementSibling.style.display = 'none';
//             fieldsValidated++;
//             checkFormValidity();
//         }
//     }

//     const form = document.querySelector('#profile-form');
//     form.addEventListener('submit', function (e) {
//         if (formValid) {
//             e.preventDefault(); // Evita que el formulario se envíe si no es válido
//             alert('Hay errores en el formulario. Por favor, verifica los datos ingresados.');
//         }
//     });
// });


// PARA MOSTRAR MENSAJE EN CASO DE AGREGAR PRODUCTO AL CARRITO SIN LOGUEARSE
/// SIN IMPLEMENTAR

// window.addEventListener('DOMContentLoaded', function () {

//     const loginAlert = document.querySelector("#login-alert");
//     const addToCartButton = document.querySelector(".addToCart-button");

//     // Función para mostrar el mensaje
//     function showMsg() {
//         loginAlert.style.display = "block";
//     }

//     // Función para cerrar el mensaje
//     function hideMsg() {
//         loginAlert.style.display = "none";
//     }

//     // Agregar un evento de clic al botón "Agregar al carrito"
//     addToCartButton.addEventListener("click", function (event) {
//         const isLogged = window.isUserLogged;
//         // Verificar si el usuario está autenticado (usando tu lógica específica)
//         if (!isLogged) {
//             // Si el usuario no está autenticado, mostrar el modal
//             showMsg();
//             event.preventDefault(); // Evitar que el formulario se envíe
//         }
//     });

//     // Agregar un evento de clic al botón "Cerrar" en el modal
//     const closeBtn = document.querySelector(".close");
//     closeBtn.addEventListener("click", hideMsg);
// });


/// AGREGO FUNCION PARA MANEJAR ACTION DEL FORMULARIO DE EDICION DE PRODUCTOS PARA ASI PODER AGRUPAR LOS BOTONES

// document.addEventListener('DOMContentLoaded', function () {
//     const setAction = (actionType, productId) => {
//         const formUpdate = document.querySelector('.form-update');
//         const formDelete = document.querySelector('.form-delete');

//         if (actionType === 'update') {
//             formUpdate.action = `/products/${productId}/update?_method=put`;
//             formUpdate.enctype = 'multipart/form-data';
//         } else if (actionType === 'delete') {
//             formDelete.action = `/products/${productId}/delete?_method=delete`;
//         }
//     }
// });

/// AGREGO FUNCION PARA MANEJAR IMAGENES DE DETALLE DE PRODUCTO

// const changeImage = (newSrc) => {
//     const mainImg = document.querySelector('.main-img');
//     mainImg.src = newSrc;

//     const slider = document.querySelector('.small-imgs-slider');

//     slider.removeChild(clickedImg);
//     slider.insertBefore(clickedImg, slider.firstChild);
// }



/// ESTO YA ESTABA COMENTADO
// const validatePassword = () => {
    //     const errorElement = password.nextElementSibling;
    //     if (!passwordRegex.test(password.value)) {
    //         errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un símbolo (#, $, *, &)';
    //         errorElement.style.display = 'block';
    //         return false;
    //     } else {
    //         errorElement.textContent = '';
    //         errorElement.style.display = 'none';
    //         fieldsValidated++;
    //         checkFormValidity();
    //         return true;
    //     }
    // };

    // const validateConfirmPassword = () => {
    //     const errorElement = confirmPassword.nextElementSibling;
    //     if (password.value !== confirmPassword.value) {
    //         errorElement.textContent = 'Las contraseñas no coinciden';
    //         errorElement.style.display = 'block';
    //         return false;
    //     } else {
    //         errorElement.textContent = '';
    //         errorElement.style.display = 'none';
    //         fieldsValidated++;
    //         checkFormValidity();
    //         return true;
    //     }
    // };

    // password.addEventListener('blur', validatePassword);
    // confirmPassword.addEventListener('blur', validateConfirmPassword);