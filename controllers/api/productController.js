const { Product, Brand, Color, Category, Image } = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
    getAll: async (req, res) => {
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
    
        products.forEach(product => {
            product.productDetail = {
                url: `http://localhost:3000/api/products/${product.id}/detail`
            };
        });
    
        res.json(products);
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
        res.json(product);
    },
 
}