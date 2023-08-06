const fs = require('fs');
const { Product, Color, Category, Brand, Image } = require('../database/models');

const middlewares = {
    middleware404(req, res, next) {
        res.status(404).render('error404');
    },

    guestMiddleware(req, res, next) {
        if (req.session.user) {
            return res.redirect('/user/profile');
        }
        next();
    },

    authMiddleware(req, res, next) {
        if (!req.session.user) {
            return res.redirect('/')
        }
        next()
    },

    userLoggedMiddleware(req, res, next) {
        res.locals.isLogged = false;
        if (req.session && req.session.user) {
            res.locals.isLogged = true;
            res.locals.user = req.session.user;
        };

        next();
    },

    logMiddleware(req, res, next) {
        fs.appendFileSync('../resources/log.txt', 'El usuario ha ingresado en la ruta ' + req.url);
        next();
    },

    rememberMiddleware(req, res, next) {

        if (req.cookies.email) {
            const userModel = require('../models/user');

            const userFromCookies = userModel.findByEmail(req.cookies.email);

            delete userFromCookies.id;
            delete userFromCookies.password;

            req.session.user = userFromCookies;
        }

        next();
    },

    async header(req, res, next) {
        try {
            const products = await Product.findAll({
                raw: true,
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' }
                ],
                nest: true,
            });
            res.locals.products = products; 
            console.log(req.originalUrl);
            res.locals.brand = (req.originalUrl).split('/')[3];
            res.locals.brand = res.locals.brand.charAt(0).toUpperCase() + res.locals.brand.slice(1);
            res.locals.category = (req.originalUrl).split('/')[4];
            res.locals.home = req.cookies.selectedBrand;

            console.log('ACA ESTA EL BRAND --- ' + res.locals.brand)
            console.log('ACA ESTA CATEGORY --- ' + res.locals.category);
            console.log('ACA ESTA HOME --- ' + res.locals.home)

            //console.log(req.originalUrl);
            /* if (!req.session.products) {
            } */

            next();
        } catch (error) {
            res.locals.products = []; // array vacío en caso de error.
            next();
        }
        
    },

    brandSelector(req, res, next) {

        res.locals.selectedBrand = req.cookies.selectedBrand

        next();
    }
}

module.exports = middlewares;