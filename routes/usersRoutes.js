const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/usersController');
const {body} = require('express-validator');
const validations = [
    body('name').notEmpty(),
    body('lastname').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty(),
    body('confirm-password').notEmpty(),
]
// @ GET /user/complete-purchase
usersRoutes.get('/complete-purchase', usersController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', usersController.getRegister);

// @POST /register
//usersRoutes.post('/register', validations, usersController.postRegister); // Falta crear el metodo postRegister

module.exports = usersRoutes;

