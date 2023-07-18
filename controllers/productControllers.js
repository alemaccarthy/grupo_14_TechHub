const { Product } = require('../database/models');
const { validationResult } = require('express-validator');

const productControllers = {
    create: async (req, res) => {
        const newProduct = {
            title: req.body.title,
            brand: req.body.brand,
            price: req.body.price,
            description: req.body.description,
            currency: req.body.currency,
            category: req.body.category,
            images: req.body.images,
            // FALTAN LOS COLORES !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        };

        try {
            const datos = await Product.create(newProduct);
            console.log(datos);
        } catch (error) {
            console.log(error);
        }

        res.render('products-list', { title: '| Productos'}) //?????????????
    }
};

module.exports = productControllers;