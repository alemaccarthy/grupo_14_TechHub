


console.log("El archivo main.js se ha cargado correctamente");

document.addEventListener('DOMContentLoaded', function () {
    let selectedBrand = '';
    const apple = document.getElementById('apple');
    const samsung = document.getElementById('samsung');
    console.log('El valor actual de selectedBrand es: ' + apple);
    console.log('El valor actual de selectedBrand es: ' + samsung);
    function handleClickApple() {
        selectedBrand = "apple";
        console.log('El valor actual de selectedBrand es: ' + selectedBrand);
    }

    function handleClickSamsung() {
        selectedBrand = "samsung";
        console.log('El valor actual de selectedBrand es: ' + selectedBrand);
    }

    if (apple && samsung) {
        
        apple.addEventListener("click", handleClickApple);
        samsung.addEventListener("click", handleClickSamsung);
    }
});


        /*samsung.addEventListener("click", function () {
            selectedBrand = "samsung";
            console.log('La selectedBrand es ' + selectedBrand);
        });*/
    

    // Mensaje adicional para verificar el valor actual de selectedBrand
    







