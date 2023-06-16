const express = require('express');
const mainRoutes = express.Router();
const mainController = require('../controllers/mainController');


// @GET /main
mainRoutes.get('/', mainController.getIndex);

// @GET /main/apple
mainRoutes.get('/apple', mainController.getHome1);

// @GET /main/samsung
mainRoutes.get('/samsung', mainController.getHome2);

//@GET /faq
mainRoutes.get('/faq', mainController.getFaq);


module.exports = mainRoutes;