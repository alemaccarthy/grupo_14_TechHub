const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        let userData = req.session.user;
        if (!userData) userData = {};
        console.log(userData.email);
        res.render('index', { title: 'TechHub', userData });
    },

    getHome1: (req, res) => {
        let userData = req.session.user;
        if (!userData) userData = {};
        res.render('apple', { title: 'TechHub', userData })
    },

    getHome2: (req, res) => {
        let userData = req.session.user;
        if (!userData) userData = {};
        res.render('samsung', { title: 'TechHub', userData })
    },
    getFaq: (req, res) => {
        let userData = req.session.user;
        if (!userData) userData = {};
        res.render('faq', { title: 'Preguntas frecuentes', userData })
    },
    getReturns: (req, res) => {
        res.render('returns', { title: 'Devoluciones' })
    }
}

module.exports = mainController; 