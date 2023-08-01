const { Product, Color } = require('../database/models');
const { validationResult } = require('express-validator');

const productControllers = {

    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll({
                raw: true,
                nest: true,
                include: 'brand'
            });
            res.render('products-list', { title: '| Productos', products });
        } catch (error) {
            res.render('products-list', { title: '| Productos', products: [] });
        }

    },

    getProductDetail: async (req, res) => {
        try {
            // const id = await Product.findByPk(req.params.id); revisar esto
            const product = await Product.findByPk(id);
            if (!product) {
                return res.render('product-not-found', { title: '| Producto no disponible' });
            }

            res.render('product-detail', { title: '| Detalle', product });
        } catch (error) {
            console.log(error);
        }
    },

    getCreateProduct: async (req, res) => {
        try {
            const product = req.body;
            res.render('create-product', { title: '| Crear producto', product });
        } catch (error) {
            console.log(error);
        }
    },


    createProduct: async (req, res) => {
        const newProduct = {
            title: req.body.title,
            //brand_id: req.body.brand, Ver como vamos a obtener el brand_id
            price: req.body.price,
            description: req.body.description,
            currency: req.body.currency,
            // category_id: req.body.category, ver como obtener el category_id
            images: req.body.images,
            // color_quantity: req.body.color_quantity, ver como obtener el color_quantity
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