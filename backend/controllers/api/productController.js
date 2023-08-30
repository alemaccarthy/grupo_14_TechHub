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
    
            // Agrego la información adicional a cada producto
            products.forEach(product => {
                product.productDetail = {
                    url: `http://localhost:3000/api/products/${product.id}/detail`
                }
            });
    
            // Creo un objeto para almacenar la información final
            const response = {
                totalProducts: totalProducts,
                productsByCategory: {},
                products: products,
            };

            productsByCategory.forEach(category => {
                response.productsByCategory[category.name] = category.get('productCount');
            });
    
            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los productos.' });
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
}