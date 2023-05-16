const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    },

    getHome1: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home-1.html'))
    },
    
    getHome2: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home-2.html'))
    }
}

module.exports = controllers; 