const express = require('express');
const usersRoutes = express.Router();
const userController = require('../../controllers/api/usersController1');
const multer = require('multer');
const middlewares = require('../../middlewares/middlewares');
const validations = require('../../middlewares/validations');
const path = require('path');


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

// @ GET /api/user/complete-purchase
usersRoutes.get('/complete-purchase', userController.getPurchase);

// @GET /api/user/register
usersRoutes.get('/register', middlewares.guestMiddleware, userController.getRegister);

// @POST /api/user/register
usersRoutes.post('/register', [upload.single('profile_picture'), validations.registerValidations], userController.createUser);
//falta agregar upload.single('nombre del cmampo')

// @GET /api/user/login
usersRoutes.get('/login', middlewares.guestMiddleware, userController.getLogin);

// @POST /api/user/login
usersRoutes.post('/login', validations.loginValidations, userController.loginUser);

// @GET /api/user/sign-out
usersRoutes.get('/sign-out', userController.logOut);

// @GET /api/user/profile
usersRoutes.get('/profile/:nombre/:id', middlewares.authMiddleware, userController.getProfile);
// usersRoutes.get('/profile', usersController.getMyProfile);

// @POST /api/user/profile
// usersRoutes.post('/profile/:nombre/:id', [upload.single('profilePic')/* FALTA LA VALIDACION */], userController.postPicture);

// @GET /api/user/:id/update
usersRoutes.get('/:id/update-profile', userController.getUpdateProfile);

// @PUT /api/user/:id/update
usersRoutes.put('/:id/update-profile', [upload.single('profile_picture'), validations.productsValidations], userController.updateProfile);


// @DELETE /user/profile
// usersRoutes.delete('/profile', /*[upload.single('profilePic') FALTA LA VALIDACION ],*/ userController.deletePicture); //VA EL MIDDLEWARE?

// @DELETE /api/user/profile
usersRoutes.delete('/profile/:id/delete', userController.deleteProfile);



module.exports = usersRoutes;

