const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/usersController');

usersRoutes.get('/login', usersController.getLogin);
usersRoutes.get('/register', usersController.getRegister);

module.exports = usersRoutes;

