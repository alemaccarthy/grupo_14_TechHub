const { Product, Color, Brand } = require('../database/models');
const { validationResult } = require('express-validator');

const productControllers = {

    getProducts: async (req, res) => {
        try {
            const products = await Product.findAll({
                raw: true,
                include: 'brand',
                nest: true

            });
            res.render('products-list', { title: '| Productos', products });
        } catch (error) {
            res.render('products-list', { title: '| Productos', products: [] });
        }

    },

    getProductDetail: async (req, res) => {
        try {
            const id = Number(req.params.id); /// VER SI ESTA OK
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
            const brands = await Brand.findAll({ attributes: ['id', 'name'] });
            const product = req.body;
            res.render('create-product', { title: '| Crear producto', product, brands });
        } catch (error) {
            console.log(error);
        }
    },


    createProduct: async (req, res) => {

        const product = { title, description, currency, images, color_quantity} = req.body;
        const price = Number(req.body.price);
        const brandName = req.body.brand_id;
        let brand_id;
        if (brandName === 'Apple') {
            brand_id = 1;
        } else if (brandName === 'Samsung') {
            brand_id = 2;
        }
        const category = req.body.category_id;
        let category_id;
        if (category === 'Smartphone') {
            category_id = 1;
        } else if (category === 'Smartwatch') {
            category_id = 2;
        } else if (category === 'Tablet') {
            category_id = 3;
        }
        const resultValidation = validationResult(req);

        try {

            if (resultValidation.errors.length > 0) {

                return res.render('create-product', {
                    title: '| Crear producto',
                    errors: resultValidation.mapped(),
                    product
                });
            }
            console.log(product);
            // const datos = await Product.create(newProduct); ESTO SE REEMPLAZA POR LO DE ABAJO
            const newProduct = await Product.create({
                title,
                price,
                description,
                currency,
                color_quantity,
                brand_id,
                category_id,
            });

            const imagesArray = req.files.map(el => ({ image: '/imgs/products-images/' + el.filename, product_id: newProduct.dataValues.id })); //CHEQUEAR DATAVALUES

            console.log(imagesArray);
            await Color.bulkCreate(imagesArray);

            const colors = [];
            for (let i = 1; i <= req.body.color_quantity; i++) {
                const colorField = `color${i}`;
                const colorValue = req.body[colorField];
                colors.push({ color: colorValue, product_id: newProduct.id });
            }

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
            const id = Number(req.params.id);
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).send('No se encontro el producto');
            }
            else {
                await product.destroy({
                    where: {
                        id: id
                    }
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