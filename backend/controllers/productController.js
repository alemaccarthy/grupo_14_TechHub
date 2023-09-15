const { Product, Color, Category, Brand, Image, ProductColor } = require('../database/models');
const { validationResult } = require('express-validator');
const { Op, Sequelize } = require('sequelize');

const productControllers = {

    searchProducts: async (req, res) => {
        const query = req.query.q;

        try {
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
                        [Op.eq]: null
                    },
                    [Op.or]: [
                        { title: { [Op.like]: `%${query}%` } },
                        { description: { [Op.like]: `%${query}%` } },
                    ],
                },
            });

            res.render('products-list', { title: '| Productos', products, query });
        } catch (error) {
            res.status(500).send('Error en la búsqueda');
        }
    },

    getProducts: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
            let category = req.params.category || null;
  
            if (category) {
                category = category.charAt(0).toUpperCase() + category.slice(1);
            }

            let products;

            if (req.query.q) {
                const query = req.query.q;
                let brand = res.locals.brand; 
                brand = brand.charAt(0).toUpperCase() + brand.slice(1);
                products = await Product.findAll({
                    raw: true,
                    include: [
                        { model: Brand, as: 'brand' },
                        { model: Category, as: 'category' },
                        { model: Image, as: 'images' },
                    ],
                    nest: true,
                    where: {
                        deletedAt: {
                            [Op.eq]: null
                        },
                        [Op.or]: [
                            { title: { [Op.like]: `%${query}%` } },

                        ],
                    },
                });

            } else {
                // Si no hay consulta de búsqueda, muestra todos los productos de la categoría y marca
                products = await Product.findAll({
                    raw: true,
                    include: [
                        { model: Brand, as: 'brand' },
                        { model: Category, as: 'category' },
                        { model: Image, as: 'images' },
                    ],
                    nest: true,
                    where: {
                        deletedAt: {
                            [Op.eq]: null
                        },
                        // Agrega condiciones para la categoría y marca si están definidas
                        ...(category && { '$category.name$': category }),
                        ...(selectedBrand && { '$brand.name$': selectedBrand }),
                    },
                });
            }

            const productMap = new Map();

            products.forEach(product => {
                const productId = product.id;

                if (!productMap.has(productId)) {
                    productMap.set(productId, {
                        ...product,
                        images: [],
                    });
                }

                const productInMap = productMap.get(productId);
                productInMap.images.push(product.images);
            });

            products = Array.from(productMap.values());

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
        const productId = req.params.id;
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
                    id: productId
                }
            });

            // Busca en la base de datos todos los colores que tenga el producto utilizando su ID y guárdalos en un array de IDs de colores
            const existingColorIds = (await ProductColor.findAll({ where: { product_id: productId } })).map(color => color.color_id);

            // Recupera los colores del req.body
            const colorNames = req.body.colors || [];
            // Como req.body no trae los IDs (que es lo que luego necesitas), busca en la base de datos los registros de colores que coincidan con los nombres de colores que trae el req.body
            const colorModels = await Color.findAll({
                where: {
                    color: {
                        [Op.in]: colorNames
                    }
                }
            });
            // Guarda en selectedColors un array con los IDs de los colores que trajo de la base de datos recién
            const selectedColors = colorModels.map(color => color.id);

            // Verifica dentro de selectedColors (que ahora es un array con los IDs de colores que vienen en el formulario) cuáles no estaban previamente asociados al producto que se está editando y guárdalos en colorsToAdd
            const colorsToAdd = selectedColors
                .filter(color => !existingColorIds.includes(color));
            // Aquí verifica lo contrario: qué IDs de colores que estaban asociados al producto que se está editando no están en el array de IDs de colores que trajo del formulario. Estos se guardan en colorsToRemove
            const colorsToRemove = existingColorIds
                .filter(id => !selectedColors.includes(id));

            // Agrega los colores que no estaban asociados al producto y utiliza Promise.all para que se ejecuten todas las promesas al mismo tiempo
            await Promise.all(colorsToAdd.map(colorId => {
                return ProductColor.create({
                    product_id: productId,
                    color_id: colorId
                });
            }));

            // Y aquí elimina los colores que estaban asociados al producto y que no están en el array de colores que trajo del formulario
            await ProductColor.destroy({
                where: {
                    product_id: productId,
                    color_id: colorsToRemove
                }
            });

            // Parecido al enfoque hecho en los colores. Aca buscamos todas las imagenes asociadas al producto por product_id en la base de datos
            const existingImages = await Image.findAll({
                where: {
                    product_id: productId,
                },
            });

            // Aca mapeo las rutas de las imagenes que nos trajimos recien de la base de datos
            const existingPaths = existingImages.map(image => image.path);

            // Aca guardo en un array las rutas de imagenes enviadas en el form para editar y que recuperamos de req.files
            const newPaths = req.files.map(file => '/imgs/products-images/' + file.filename);

            // ahora guardo en un array las rutas que se tendran que agregar porque estan en el req.files al recibir el form y no estaban en el array de rutas de imagenes recuperado de la base de datos
            const pathsToAdd = newPaths.filter(path => !existingPaths.includes(path));

            // aca la inversa a lo anterior. Guardo en un array las rutas que se tendran que eliminar porque estaban en el array de rutas de imagenes recuperado de la base de datos pero no estan en el req.files al recibir el form
            const pathsToRemove = existingPaths.filter(path => !newPaths.includes(path));

            // se hace el proceso de agregar las imagenes que no estaban asociadas al producto solo si hay cambios en las imágenes para evitar que se 'sobreescriba' pero vacio
            if (pathsToAdd.length > 0) {
                await Image.bulkCreate(pathsToAdd.map(path => ({ path, product_id: productId })));
            }

            // haciendo la misma verificacion que recien, pero aca elimino las imagenes que estaban asociadas al producto pero no estan en el req.files al recibir el form
            if (newPaths.length > 0) {
                await Image.destroy({
                    where: {
                        product_id: productId,
                        path: pathsToRemove,
                    },
                });
            }

            res.redirect(`/products/catalog/${brandParam}`);

        } catch (error) {
            res.send("No se pudo actualizar " + error);

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