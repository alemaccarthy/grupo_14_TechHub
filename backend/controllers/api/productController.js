const { Product, Brand, Color, Category, Image } = require('../../database/models');
const { Op, Sequelize } = require('sequelize');



module.exports = {
    getAll: async (req, res) => {
        try {
            // Consulta para obtener la cantidad total de productos
            const totalProducts = await Product.count({
                where: {
                    deletedAt: {
                        [Op.eq]: null
                    }
                }
            });

            // Consulta para obtener la cantidad de productos por categoría
            const productsByCategory = await Category.findAll({
                attributes: ['name', [Sequelize.fn('COUNT', Sequelize.col('products_category.id')), 'productCount']],
                include: [{
                    model: Product,
                    as: 'products_category',
                    attributes: [],
                    where: {
                        deletedAt: {
                            [Op.eq]: null
                        }
                    },
                }],
                group: ['Category.id', 'Category.name'],
            });

            // Consulta para obtener la lista de productos
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
                    }
                },
            });

            // Creo un objeto para almacenar la información final
            const response = {
                totalProducts: totalProducts,
                productsByCategory: {},
                products: [],
            };

            productsByCategory.forEach(category => {
                response.productsByCategory[category.name] = category.get('productCount');
            });

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

            // convierto el mapa de productos de nuevo a un array
            response.products = Array.from(productMap.values());

            res.json(response);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'No se pudo obtener los productos de nuestra base de datos' });
        }
    },

    getProductDetail: async (req, res) => {
        const id = Number(req.params.id);
        const product = await Product.findByPk(id, {
            include: [
                { model: Brand, as: 'brand' },
                { model: Category, as: 'category' },
                { model: Image, as: 'images' },
                {
                    model: Color,
                    through: { attributes: [] },
                    as: 'colors'
                }
            ],
            where: {
                deletedAt: {
                    [Op.eq]: null
                },

            }
        });

        res.json(product);
    },

    searchProducts: async (req, res) => {
        try {
            const query = req.query.q || '';
    
            // Consulta para obtener productos que coincidan con la consulta
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
                        // { description: { [Op.like]: `%${query}%` } },
                    ],
                },
            });
    
            // Crear un mapa para almacenar productos con sus imágenes (misma solucion implementada en los metodos previos)
            const productMap = new Map();
    
            products.forEach(product => {
                const productId = product.id;
    
                // Si el producto aún no está en el mapa, lo agrego
                if (!productMap.has(productId)) {
                    productMap.set(productId, {
                        ...product,
                        images: [], // inicializo un array vacío para las imágenes
                    });
                }
    
                // se hace el mapeo y agrego cada imagen dentro del array de imágenes que recien creamos vacio
                const productInMap = productMap.get(productId);
                productInMap.images.push(product.images);
            });
    
            // Convierte el mapa de productos de nuevo a un array
            const uniqueProducts = Array.from(productMap.values());
    
            res.json(uniqueProducts);
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'No se pudieron obtener los productos de la base de datos' });
        }
    }
    
}