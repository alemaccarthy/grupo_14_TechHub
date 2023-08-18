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















