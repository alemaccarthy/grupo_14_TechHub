const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/usersController');

// @ GET /user/complete-purchase
usersRoutes.get('/complete-purchase', usersController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', usersController.getRegister);

module.exports = usersRoutes;

