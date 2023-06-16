const path = require('path');

const mainController = {
    getIndex: (req, res) => {
        let userSession = req.session.user;
        if (!userSession) userSession = {};

        res.render('index', { title: 'TechHub', userSession });
    },

    getHome1: (req, res) => {
        let userSession = req.session.user;
        if (!userSession) userSession = {};

        res.render('apple', { title: 'TechHub', userSession })
    },

    getHome2: (req, res) => {
        let userSession = req.session.user;
        if (!userSession) userSession = {};
        
        res.render('samsung', { title: 'TechHub', userSession })
    },
    getFaq: (req, res) => {
        let userSession = req.session.user;
        if (!userSession) userSession = {};
        
        res.render('faq', { title: 'Preguntas frecuentes', userSession })
    }
}

module.exports = mainController; 