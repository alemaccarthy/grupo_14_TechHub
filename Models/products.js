const fs = require('fs');
const path = require('path');

const productModel = {
    route: '../data/products.json',

    findAll() {
        //leemos el JSON
        const productsJSON = fs.readFileSync(path.join(__dirname, this.route), "utf-8");

        //pasamos de JSON a JS
        const products = JSON.parse(productsJSON);

        return products;
    },

    findbyId(id) {
        const findProduct = this.findAll();

        //buscamos el índice del producto
        let searched = findProduct.find(el => el.id === id);

        if (!searched) null

        return searched;
    },

    updateById(id, newData) {
        const products = this.findbyId(id)
        const index = products.findIndex(el => el.id === id);
        
        //editamos las propiedades con los datos recibidos del formulario
        products[index].title = newData.title;
        products[index].price = newData.price;
        products[index].description = newData.description;
        products[index].colors = newData.colors; //PREGUNTAR
        products[index].category = newData.category;
        // products[index].images = newData.images; // PREGUNTAR

        updatedProduct =  products[index];

        //pasamos a JSON
        const productsJSON = JSON.stringify(products);

        //sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);

        return products;
    },

    deleteById(id){
        const products = this.findAll();
        const index = products.findIndex(el => el.id === id);

        //cambiamos la propiedad deleted a true
        products[index].deleted = true;
    },

    createProduct(product){
        let products = this.findAll();

        //se pushea el objeto al array
        product.id = products[products.length -1].id + 1
        
        products.push(product);
        
        //pasamos el nuevo array a JSON
        const productsJSON = JSON.stringify(products);

        //sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
    }
}

module.exports = productModel;