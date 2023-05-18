const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        res.render('index');
    },

    getHome1: (req, res) => {
        res.render('home-1')
    },
    
    getHome2: (req, res) => {
        res.render('home-2')
    }
}

module.exports = mainController; 