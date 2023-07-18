const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/usersController');
const multer = require('multer');
const middlewares = require('../middlewares/middlewares');
const validations = require('../middlewares/validations');


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

// @ GET /user/complete-purchase
usersRoutes.get('/complete-purchase', usersController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', middlewares.guestMiddleware, usersController.getRegister);

// @POST /register
usersRoutes.post('/register', validations.registerValidations, usersController.postRegister);
//falta agregar upload.single('nombre del cmampo')

// @GET /login
usersRoutes.get('/login', middlewares.guestMiddleware, usersController.getLogin);

// @POST /login
usersRoutes.post('/login', validations.loginValidations, usersController.loginUser);

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

