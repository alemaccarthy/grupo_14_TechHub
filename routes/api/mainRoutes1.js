const express = require('express');
const mainRoutes = express.Router();
const mainController = require('../../controllers/api/mainController1');


// @GET /api/main
mainRoutes.get('/', mainController.getIndex);

// @GET /api/main/apple
mainRoutes.get('/apple', mainController.getHome1);

// @GET /api/main/samsung
mainRoutes.get('/samsung', mainController.getHome2);

//@GET /api/main/faq
mainRoutes.get('/faq', mainController.getFaq);


module.exports = mainRoutes;