const path = require('path');
const { Product, Color, Category, Brand, Image } = require('../database/models');

const mainController = {
    getIndex: (req, res) => {
        res.render('index', { title: 'TechHub' });
    },

    getHome1: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);

            // Consulta a la base de datos para obtener la categoría de productos de la marca seleccionada
            const products = await Product.findAll({
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' }
                ],
                where: {
                    '$brand.name$': selectedBrand,
                    deletedAt: null // Si deseas filtrar productos eliminados
                }
            });
            console.log('ESTOS SON LOS PRODUCTOS EN HOME APPLE ' + JSON.stringify(products, null, 2)); //ASI LOS PODES MOSTRAR POR CONSOLA
            res.render('apple', { title: 'TechHub', selectedBrand, products });
        } catch (error) {
            res.render('apple', { title: 'TechHub', category: null });
        }
    },

    getHome2: async (req, res) => {
        try {
            const selectedBrandraw = req.cookies.selectedBrand;
            const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);

            // Consulta a la base de datos para obtener la categoría de productos de la marca seleccionada
            const products = await Product.findAll({
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' }
                ],
                where: {
                    '$brand.name$': selectedBrand,
                    deletedAt: null // Si deseas filtrar productos eliminados
                }
            });

            
            res.render('samsung', { title: 'TechHub', selectedBrand });
        } catch (error) {
            res.render('samsung', { title: 'TechHub', selectedBrand });
        }
    },
    
    getFaq: (req, res) => {
        const selectedBrandraw = req.cookies.selectedBrand;
        const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
        res.render('faq', { title: 'Preguntas frecuentes', selectedBrand })
    }
}

module.exports = mainController; 