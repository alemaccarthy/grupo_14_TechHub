const { Product, Color, Category, Brand, Image } = require('../database/models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');
const productControllers = {

    getProducts: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            const products = await Product.findAll({
                raw: true,
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },
                ],
                nest: true,
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },

                }

            });

            console.log('ESTOS SON LOS PRODUCTS' + JSON.stringify(products, null, 2)); //ASI LOS PODES MOSTRAR POR CONSOLA
            res.render('products-list', { title: '| Productos', products, selectedBrand });
        } catch (error) {

            res.render('products-list', { title: '| Productos', products: [] });
        }

    },

    getProductDetail: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            const id = Number(req.params.id); /// VER SI ESTA OK
            const product = await Product.findByPk(id, {
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },

                ],
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },

                }
            });
            console.log('ESTE ES UN PRODUCTO DETAIL' + JSON.stringify(product, null, 2));
            if (!product) {
                return res.render('product-not-found', { title: '| Producto no disponible' });
            }

            res.render('product-detail', { title: '| Detalle', product, selectedBrand });
        } catch (error) {
            console.log(error);
        }
    },

    getCreateProduct: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            const brands = await Brand.findAll({ attributes: ['id', 'name'] });
            const product = req.body;
            res.render('create-product', { title: '| Crear producto', product, brands, selectedBrand });
        } catch (error) {
            console.log(error);
        }
    },


    createProduct: async (req, res) => {
        const product = { title, description, currency, images, color_quantity } = req.body;
        const price = Number(req.body.price);
        const brandName = req.body.brand_id;
        let brand_id;
        if (brandName === 'apple') {
            brand_id = 1;
        } else if (brandName === 'samsung') {
            brand_id = 2;
        }
        const categoryName = req.body.category_id;
        let category_id;
        if (categoryName === 'smartphone') {
            category_id = 1;
        } else if (categoryName === 'smartwatch') {
            category_id = 2;
        } else if (categoryName === 'tablet') {
            category_id = 3;
        }
        const resultValidation = validationResult(req);

        try {

            /*if (resultValidation.errors.length > 0) {

                return res.render('create-product', {
                    title: '| Crear producto',
                    errors: resultValidation.mapped(),
                    product: req.body
                });
            }*/
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

            const selectedColors = req.body.colors || []; // req.body.colors estaria siendo array de los nombres de los colores seleccionados

            // Guarda los nombres de los colores seleccionados 
            await newProduct.update({ colors: selectedColors });
            console.log(newProduct.dataValues);
            const imagesArray = req.files.map(el => ({ path: '/imgs/products-images/' + el.filename, product_id: newProduct.dataValues.id })); //CHEQUEAR DATAVALUES

            console.log(imagesArray);
            await Image.bulkCreate(imagesArray);

        } catch (error) {
            console.log(error);
        }

        res.redirect(`/products/catalog/${brandName}`)
    },

    getUpdateProduct: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            const id = Number(req.params.id);
            const updatedProduct = await Product.findByPk(id, {
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },

                ],
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },

                }
            });
            console.log('ESTE ES EL PRODUCTO A EDITAR' + JSON.stringify(updatedProduct, null, 2));
            if (!updatedProduct) {
                return res.render('product-not-found');
            }
            const transformedProduct = {
                ...updatedProduct.toJSON(),
                brand_id: updatedProduct.brand.id,
                category_id: updatedProduct.category.name
            };

            res.render('update-product', { title: 'Editar producto', product: transformedProduct, selectedBrand })
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
                return;
            }
        }
        catch (error) {
            res.status(500).send('No se pudo eliminar el producto');
        }
    }
}

module.exports = productControllers;