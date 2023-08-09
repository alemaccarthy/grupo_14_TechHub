const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        res.render('index', { title: 'TechHub'});
    },

    getHome1: (req, res) => {
        const selectedBrandraw = req.cookies.selectedBrand;
        const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
        res.render('apple', { title: 'TechHub', selectedBrand})
    },

    getHome2: (req, res) => {      
        const selectedBrandraw = req.cookies.selectedBrand;
        const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
        res.render('samsung', { title: 'TechHub', selectedBrand})
    },
    getFaq: (req, res) => {
        const selectedBrandraw = req.cookies.selectedBrand;
        const selectedBrand = selectedBrandraw.charAt(0).toUpperCase() + selectedBrandraw.slice(1);
        res.render('faq', { title: 'Preguntas frecuentes', selectedBrand})
    }
}

module.exports = mainController; 