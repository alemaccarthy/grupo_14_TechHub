const express = require('express');
const mainRoutes = express.Router();
const mainController = require('../controllers/mainController');


// @GET /main
mainRoutes.get('/', mainController.getIndex)

// @GET /main/home-1
mainRoutes.get('/home-1', mainController.getHome1)

// @GET /main/home-1
mainRoutes.get('/home-2', mainController.getHome2)

module.exports = mainRoutes;