const { body } = require('express-validator');
const path = require('path');

const validations = {
    registerValidations: [
        body('name').notEmpty().withMessage('El nombre es obligatorio'),
        body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
        body('email')
            .notEmpty().withMessage('El email es obligatorio').bail()
            .isEmail().withMessage('Debe indicar un email válido').bail()
            .normalizeEmail(),
        body('password')
            .notEmpty().withMessage('La contraseña es obligatoria').bail()
            .isLength({ min: 10 }).withMessage('La contraseña debe contener al menos 10 caracteres')
            .custom((value, { req }) => {
                const patron = /(?=.*\d{3,})(?=.*[A-Z]{1,})(?=.*\W{1,})/
                if (!patron.test(req.body.password)) {
                    throw new Error('La contraseña debe contener al menos 1 mayúscula, 1 número y un símbolo');
                }
                return true;
            }),
        body('dni').notEmpty().withMessage('El DNI es obligatorio'),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        })
    ],
    loginValidations: [
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
    ],
    productsValidations: [
        body('title').notEmpty().withMessage('El titulo no puede estar vacio'),
        body('brand_id').notEmpty().withMessage('Selecciona una marca'),
        body('description').notEmpty().withMessage('Debes darle una descripcion al producto'),
        body('currency').notEmpty().withMessage('Debes elegir una moneda para expresar el precio del producto'),
        body('price').notEmpty().withMessage('Debes asignar un precio al producto'),
        body('category_id').notEmpty().withMessage('Debes seleccionar una categoria'),
        body('colors').notEmpty().withMessage('Debes seleccionar la cantidad de colores disponibles'),
        body('images').custom((value, { req }) => {
            let files = req.files;
            if (!files) {
                throw new Error('Debes subir una imagen del producto');
            }
            
            let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
    
            files.forEach(el => {
                let fileExtension = path.extname(el.originalname);
                
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            });
    
            return true;
    
        })
    ]
}

module.exports = validations;