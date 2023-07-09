const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        res.render('index', { title: 'TechHub'});
    },

    getHome1: (req, res) => {
        const selectedBrand = req.cookies.selectedBrand;
        res.render('apple', { title: 'TechHub', selectedBrand})
    },

    getHome2: (req, res) => {      
        const selectedBrand = req.cookies.selectedBrand; 
        res.render('samsung', { title: 'TechHub', selectedBrand})
    },
    getFaq: (req, res) => {
        res.render('faq', { title: 'Preguntas frecuentes'})
    }
}

module.exports = mainController; 