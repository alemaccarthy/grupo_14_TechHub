const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        res.render('index', {title: 'TechHub'});
    },

    getHome1: (req, res) => {
        res.render('home-1', {title: 'TechHub'})
    },
    
    getHome2: (req, res) => {
        res.render('home-2', {title: 'TechHub'})
    }
}

module.exports = mainController; 