const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/usersController');

// @ GET /user

usersRoutes.get('/complete-purchase', usersController.getPurchase);

usersRoutes.get('/register', usersController.getRegister);

module.exports = usersRoutes;

