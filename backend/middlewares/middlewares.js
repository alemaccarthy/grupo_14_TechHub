const fs = require('fs');
const { Product, Color, Category, Brand, Image, User } = require('../database/models');
const { Op } = require('sequelize');

const middlewares = {
    middleware404(req, res, next) {
        res.status(404).render('error404');
    },

    guestMiddleware(req, res, next) {
        if (req.session.user) {
            return res.redirect(`/user/profile/${req.session.user.name}/${req.session.user.id}`);
        }
        next();
    },

    adminMiddleware(req, res, next) {
        if (req.session && !req.session.user.email.endsWith('@techhub.com')) {
            return res.redirect(`/`);
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
        }
        next();
    },

    rememberMiddleware: async (req, res, next) => {
        if (req.session.email) {
            try {
                const sessionUser = await User.findOne({
                    where: {
                        email: req.session.user.email
                    }
                });

                if (sessionUser) {
                    delete sessionUser.id;
                    delete sessionUser.password;

                    req.session.user = sessionUser;
                }
            } catch (error) {
                console.error(error);
            }
        }

        next();
    },

    sessionTimeoutMiddleware: (req, res, next) => {
        if (req.session.user) {
            // Obtén la hora actual
            const now = Date.now();
            const sessionTime = req.session.cookie.maxAge;

            // Verifica si ha pasado más tiempo del permitido
            if (now - req.session.lastActivity > sessionTime) {
                // Si ha pasado demasiado tiempo, destruye la sesión
                req.session.destroy(err => {
                    if (err) {
                        console.error('Error al destruir la sesión:', err);
                    }
                });
            } else {
                // Actualiza la hora de la última actividad
                req.session.lastActivity = now;
            }
        }
        next();
    },

    async header(req, res, next) {
        try {
            const products = await Product.findAll({
                raw: true,
                include: [
                    { model: Brand, as: 'brand' },
                    { model: Category, as: 'category' },
                    { model: Image, as: 'images' },
                ],
                nest: true,
                where: {
                    deletedAt: {
                        [Op.eq]: null // Filtra productos que no se les aplico soft Delete
                    },
                }           
            });
    
            res.locals.products = products;
            res.locals.home = req.cookies.selectedBrand;
            res.locals.brand = (req.originalUrl).split('/')[3];
            res.locals.brand = res.locals.brand.charAt(0).toUpperCase() + res.locals.brand.slice(1);
            
            // Verificar si existen segmentos de ruta antes de acceder a ellos
            /* if (req.originalUrl) {
                const segments = req.originalUrl.split('/');
                if (segments.length >= 4) {
                    res.locals.brand = segments[3].charAt(0).toUpperCase() + segments[3].slice(1);
                }
                if (segments.length >= 5) {
                    res.locals.category = segments[4].charAt(0).toUpperCase() + segments[4].slice(1);
                }
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
