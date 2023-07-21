const { Product } = require('../database/models');
const { validationResult } = require('express-validator');

const productControllers = {
    createProduct: async (req, res) => {
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
    },

    updateProduct: async (req, res) => {
        const newValues = req.body;

        try {
            await Product.update(newValues, {
                where: {
                    id: req.params.id
                }
            });

            res.redirect('/catalog/:brand');
        } catch (error) {
            res.send("no se pudo actualizar");
            console.log(error);
        }
    }
};

module.exports = productControllers;