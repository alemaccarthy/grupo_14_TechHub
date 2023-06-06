const express = require('express');
const usersRoutes = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

const registerValidations = [
    body('name').notEmpty().withMessage('El campo de nombre es obligatorio'),
    body('lastname').notEmpty().withMessage('El campo de apellido es obligatorio'),
    body('email')
    .notEmpty().withMessage('El campo de email es obligatorio').bail()
    .isEmail().withMessage('El campo de email es obligatorio').bail()  
    .normalizeEmail(),
    body('password').notEmpty().withMessage('El campo de contraseña es obligatorio'),
    body('confirm-password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
]

// @ GET /user/complete-purchase
usersRoutes.get('/complete-purchase', usersController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', usersController.getRegister);

// @POST /register
//usersRoutes.post('/register', registerValidations, usersController.postRegister); // Falta crear el metodo postRegister

module.exports = usersRoutes;

