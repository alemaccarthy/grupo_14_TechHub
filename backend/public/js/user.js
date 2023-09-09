document.addEventListener('DOMContentLoaded', function () {

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

    /// FUNCION PARA MANIPULAR COMO SE MUESTRA AL CARGAR LA IMAGEN DE PERFIL DE USUARIO Y ESTABLECER UNA IMAGEN POR DEFECTO
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

    ///////////////////////////////////////////////////////

    // VALIDACIONES DEL LADO DEL CLIENTE PARA CREACION DE USUARIOS
    const name = document.querySelector('#nombres');
    const lastName = document.querySelector('#apellido');
    const email = document.querySelector('#correo');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$&*]).{6,}$/;
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
    const telephoneRegex = /^\+549\d+$/;
    let formValid = false;
    let fieldsValidated = 0;
    const totalFields = 14;

    const checkFormValidity = () => {
        if (fieldsValidated === totalFields) {
            formValid = true;
        } else {
            formValid = false;
        }
    };

    name.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.textContent = 'Debes ingresar tu nombre o nombres';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.textContent = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    lastName.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.textContent = 'Debes ingresar tu apellido';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    email.onblur = (e) => {
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            email.nextElementSibling.textContent = 'Ingresa un correo electrónico válido';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            email.nextElementSibling.textContent = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    password.onblur = (e) => {
        const errorElement = password.nextElementSibling;
        const confirmPasswordValue = confirmPassword.value;
        const passwordValue = password.value;
    
        if (passwordValue.length < 6) {
            e.preventDefault();
            errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres';
            errorElement.style.display = 'block';
        } else if (!passwordRegex.test(passwordValue)) {
            e.preventDefault();
            errorElement.textContent = 'La contraseña debe contener al menos 1 minúscula, 1 mayúscula y 1 símbolo (#, $, *, &)';
            errorElement.style.display = 'block';
        } else if (confirmPasswordValue !== '' && confirmPasswordValue !== passwordValue) {
            const confirmErrorElement = confirmPassword.nextElementSibling;
            confirmErrorElement.textContent = 'Las contraseñas no coinciden';
            confirmErrorElement.style.display = 'block';
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    };
    
    confirmPassword.onblur = (e) => {
        const errorElement = confirmPassword.nextElementSibling;
        const confirmPasswordValue = confirmPassword.value;
        const passwordValue = password.value;
    
        if (passwordValue !== confirmPasswordValue) {
            e.preventDefault();
            errorElement.textContent = 'Las contraseñas no coinciden';
            errorElement.style.display = 'block';
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    };
    

    dni.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu DNI';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    street.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar una calle válida';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    number.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar una altura';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    floor.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar un piso';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    door.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar un departamento';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    city.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu ciudad';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    province.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu provincia';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    postalCode.onblur = (e) => {
        const length = e.target.value.length;
        if (length === 0) {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu código postal';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    telephone.onblur = (e) => {
        const value = e.target.value.trim(); // Eliminamos espacios en blanco al inicio y al final
        if (value === '') {
            e.target.nextElementSibling.innerHTML = 'Debes ingresar tu número de teléfono';
            e.target.nextElementSibling.style.display = 'block';
        } else if (!telephoneRegex.test(value)) {
            e.target.nextElementSibling.innerHTML = 'El número de teléfono debe comenzar con +549 y contener solo números';
            e.target.nextElementSibling.style.display = 'block';
        } else {
            e.target.nextElementSibling.innerHTML = '';
            e.target.nextElementSibling.style.display = 'none';
            fieldsValidated++;
            checkFormValidity();
        }
    }

    const form = document.querySelector('#profile-form');
    form.addEventListener('submit', function (e) {
        if (formValid) {
            e.preventDefault(); // Evita que el formulario se envíe si no es válido
            alert('Hay errores en el formulario. Por favor, verifica los datos ingresados.');
        }
    });

});