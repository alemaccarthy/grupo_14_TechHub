const { Product, Color } = require('../database/models');
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
            color_quantiy: req.body.color_quantiy,
        };

        try {
            const datos = await Product.create(newProduct);

            const colors = [];
            for (let i = 1; i <= req.body.color_quantity; i++) {
                const colorField = `color${i}`;
                const colorValue = req.body[colorField];
                colors.push({ color: colorValue, product_id: Product.id });
            }
            await Color.bulkCreate(colors);

            console.log(datos);
        } catch (error) {
            console.log(error);
        }

        res.render('products-list', { title: '| Productos' }) //?????????????
    },

    getUpdateProduct: async (req, res) => {
        try {
            const updatedProduct = await Product.findByPk(req.params.id);
            if (!updatedProduct) {
                // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
                // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
                return res.render('product-not-found');
            }

            res.render('update-product', { updatedProduct })
        } catch (error) {
            console.log(error);
        }
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
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                return res.status(404).send('No se encontro el producto');
            }
            else {
                await product.update({
                    deleted: true
                });
                res.redirect('/products');
            }
        }
        catch (error) {
            res.status(500).send('No se pudo eliminar el producto');
        }
    }
}

module.exports = productControllers;