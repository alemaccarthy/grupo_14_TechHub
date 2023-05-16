const express = require('express');
const mainRoutes = express.Router();
const mainController = require('../controllers/mainController');

mainRoutes.get('/', mainController.getIndex)

mainRoutes.get('/home-1', mainController.getHome1)

mainRoutes.get('/home-2', mainController.getHome2)

module.exports = mainRoutes;