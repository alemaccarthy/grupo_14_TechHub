const { Product, Color, Category, Brand, Image, ProductColor } = require('../database/models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const productControllers = {

    getProducts: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            let category = req.params.category || null; // si no hay categoria en la url le asigno un null
            if (category) {
                category = category.charAt(0).toUpperCase() + category.slice(1);
            }
            console.log('ESTA ES LA CATEGORY EN EL CONTROLADOR ' + category);
            let products = await Product.findAll({
                raw: true,
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },
                ],
                nest: true,
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplicó soft Delete
                    },
                },
            });
            console.log('ESTOS SON LOS PRODUCTOS ANTES DE AGRUPAR EN EL CONTROLADOR ' + JSON.stringify(products, null, 2));
            // Creo un mapa (estructura de clave y valor) para almacenar productos con sus imágenes
            const productMap = new Map();

            products.forEach(product => {
                const productId = product.id;

                // Si el producto aún no está en el mapa, se agrega
                if (!productMap.has(productId)) {
                    productMap.set(productId, {
                        ...product,
                        images: [], // Inicializa un array vacío para las imágenes
                    });
                }

                // recupero cada producto del mapa y le agrego cada imagen dentro del array de imagenes del producto
                const productInMap = productMap.get(productId);
                productInMap.images.push(product.images);
            });

            products = Array.from(productMap.values());
            console.log('ESTOS SON LOS PRODUCTOS DESPUESSSSSS DE AGRUPAR EN EL CONTROLADOR ' + JSON.stringify(products, null, 2));

            res.render('products-list', { title: '| Productos', products, category, selectedBrand });
        } catch (error) {
            res.render('products-list', { title: '| Productos', products: [] });
        }
    },


    getProductDetail: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            const id = Number(req.params.id);
            const products = res.locals.products;
            const product = await Product.findByPk(id, {
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },
                    {
                        model: Color,
                        through: { attributes: [] }, // Para excluir las columnas de la tabla intermedia
                        as: 'colors'
                    }
                ],
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },

                }
            });

            if (!product) {
                return res.render('product-not-found', { title: '| Producto no disponible' });
            }

            res.render('product-detail', { title: '| Detalle', product, selectedBrand, products });
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
            const selectedColors = req.body.colors || [];
            // Buscar los modelos de colores correspondientes a los nombres seleccionados
            const colorModels = await Color.findAll({
                where: {
                    color: {
                        [Op.in]: selectedColors,
                    },
                },
            });

            // Obtener los IDs de los colores
            const colorIds = colorModels.map(color => color.id);
            console.log('ESTOS SON LOS ID DE COLORES SELECCIONADOS ' + colorIds);

            await Promise.all(colorIds.map(colorId => {
                return ProductColor.create({
                    product_id: newProduct.id,
                    color_id: colorId,
                });
            }));

            
            const imagesArray = req.files.map(el => ({ path: '/imgs/products-images/' + el.filename, product_id: newProduct.dataValues.id })); //CHEQUEAR DATAVALUES

            await Image.bulkCreate(imagesArray);
            newProduct.images = imagesArray;

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
                attributes: [
                    'id',
                    'title',
                    'price',
                    'description',
                    'currency',
                    'color_quantity',
                    'createdAt',
                    'updatedAt',
                    'deletedAt',
                    'brand_id',
                    'category_id',
                ],
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },
                    {
                        model: Color,
                        as: 'colors',
                        attributes: ['id', 'color'], // Selecciona solo las columnas necesarias de la tabla Color
                        through: {
                            attributes: [] // No seleccionar ninguna columna de la tabla de unión product_color
                        }
                    },
                ],
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplicó soft Delete
                    },
                }
            });
            
            console.log('ESTE ES EL PRODUCTO A EDITAR VERSION SIN TRANSF ' + JSON.stringify(updatedProduct, null, 2));

            if (!updatedProduct) {
                return res.render('product-not-found');
            }
            const transformedProduct = {
                ...updatedProduct.toJSON(),
                brand_id: updatedProduct.brand.id,
                category_id: updatedProduct.category.name
            };

            console.log('ESTE ES EL PRODUCTO A EDITAR TRANSFORMADO ' + JSON.stringify(transformedProduct, null, 2));

            res.render('update-product', { title: 'Editar producto', product: transformedProduct, selectedBrand })
        } catch (error) {
            console.log(error);
        }
    },

    updateProduct: async (req, res) => {
        const newValues = req.body;
        const brandName = req.body.brand_id;
        let brandParam;
        if (brandName === 'apple') {
            newValues.brand_id = 1;
            brandParam = 'apple';
        } else if (brandName === 'samsung') {
            newValues.brand_id = 2;
            brandParam = 'samsung';
        }
        const categoryName = req.body.category_id;

        if (categoryName === 'smartphone') {
            newValues.category_id = 1;
        } else if (categoryName === 'smartwatch') {
            newValues.category_id = 2;
        } else if (categoryName === 'tablet') {
            newValues.category_id = 3;
        }
        const resultValidation = validationResult(req);

        try {
            await Product.update(newValues, {
                where: {
                    id: req.params.id
                }
            });

            res.redirect(`/products/catalog/${brandParam}`);

        } catch (error) {
            res.send("no se pudo actualizar");
            console.log('ESTE ES EL MOTIVO DE ERROR AL HACER UPDATE ' + error);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const product = await Product.findByPk(id, {
                include: [
                    { model: Brand, as: 'brand' },
                ],
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },
                }
            });
            const brandName = product.brand.name.toLowerCase();
            if (!product) {
                return res.status(404).send('No se encontro el producto');
            }
            else {
                await product.destroy({
                    where: {
                        id: id
                    }
                });
                res.redirect(`/products/catalog/${brandName}`);
                return;
            }
        }
        catch (error) {
            res.status(500).send('No se pudo eliminar el producto');
        }
    }
}

module.exports = productControllers;