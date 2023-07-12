const express = require('express');
const usersRoutes = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');
const multer = require('multer');
const middlewares = require('../middlewares/middlewares');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/imgs/profile-images');
    },
    filename: function(req, file, cb) {
        let filename = `${Date.now()}_img_profile${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({storage}); //no está en uso

const registerValidations = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debe indicar un email válido').bail()  
    .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({min:10}).withMessage('La contraseña debe contener al menos 10 caracteres')
        .custom((value, {req}) => {
            const patron = /(?=.*\d{3,})(?=.*[A-Z]{1,})(?=.*\W{1,})/
            if(!patron.test(req.body.password)){
            throw new Error ('La contraseña debe contener al menos 1 mayúscula, 1 número y un símbolo');
        }
            return true;
        }),
    body('dni').notEmpty().withMessage('El DNI es obligatorio'),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
]

const loginValidations = [
    body('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debe indicar un email válido').bail()  
    .normalizeEmail(),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').bail(), 
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
]

// @ GET /user/complete-purchase
usersRoutes.get('/complete-purchase', usersController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', middlewares.guestMiddleware, usersController.getRegister);

// @POST /register
usersRoutes.post('/register', registerValidations, usersController.postRegister);
//falta agregar upload.single('nombre del cmampo')

// @GET /login
usersRoutes.get('/login', middlewares.guestMiddleware, usersController.getLogin);

// @POST /login
usersRoutes.post('/login', usersController.loginUser);

// @GET /user/profile
usersRoutes.get('/profile', middlewares.authMiddleware, usersController.getProfile);
// usersRoutes.get('/my-profile', usersController.getMyProfile);

// @POST /user/profile
usersRoutes.post('/profile', [upload.single('profilePic')/* FALTA LA VALIDACION */], usersController.postPicture);

// @DELETE /user/profile
usersRoutes.delete('/profile', /*[upload.single('profilePic') FALTA LA VALIDACION ],*/ usersController.deletePicture); //VA EL MIDDLEWARE?

// @GET /user/sign-out
usersRoutes.get('/sign-out', usersController.logOut);

module.exports = usersRoutes;

