const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        res.render('index', { title: 'TechHub'});
    },

    getHome1: (req, res) => {
        res.render('apple', { title: 'TechHub'})
    },

    getHome2: (req, res) => {       
        res.render('samsung', { title: 'TechHub'})
    },
    getFaq: (req, res) => {
        res.render('faq', { title: 'Preguntas frecuentes'})
    }
}

module.exports = mainController; 