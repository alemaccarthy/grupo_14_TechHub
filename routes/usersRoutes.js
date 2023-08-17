const express = require('express');
const usersRoutes = express.Router();
const userController = require('../controllers/userController');
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
usersRoutes.get('/complete-purchase', userController.getPurchase);

// @GET /user/register
usersRoutes.get('/register', middlewares.guestMiddleware, userController.getRegister);

// @POST /register
usersRoutes.post('/register', validations.registerValidations, userController.createUser);
//falta agregar upload.single('nombre del cmampo')

// @GET /login
usersRoutes.get('/login', middlewares.guestMiddleware, userController.getLogin);

// @POST /login
usersRoutes.post('/login', validations.loginValidations, userController.loginUser);

// @GET /user/sign-out
usersRoutes.get('/sign-out', userController.logOut);

// @GET /user/profile
usersRoutes.get('/profile', middlewares.authMiddleware, userController.getProfile);
// usersRoutes.get('/profile', usersController.getMyProfile);

// @POST /user/profile
usersRoutes.post('/profile', [upload.single('profilePic')/* FALTA LA VALIDACION */], userController.postPicture);

// @GET /user/:id/update
productRoutes.get('/update', userController.getUpdateProduct);

// @PUT /products/:id/update
productRoutes.put('/:id/update', [upload.any('images'), validations.productsValidations], productController.updateProduct);


// @DELETE /user/profile
// usersRoutes.delete('/profile', /*[upload.single('profilePic') FALTA LA VALIDACION ],*/ userController.deletePicture); //VA EL MIDDLEWARE?

// @DELETE /user/profile
usersRoutes.delete('/profile/delete', userController.deleteProfile);


module.exports = usersRoutes;

