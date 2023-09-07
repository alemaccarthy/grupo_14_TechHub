    const express = require('express');
const apiUsersRoutes = express.Router();
const apiController = require('../../controllers/api/usersController');

// @GET  /api/users
apiUsersRoutes.get('/', apiController.getAll);

// @GET /api/users/:id
apiUsersRoutes.get('/:id', apiController.getProfile);



module.exports = apiUsersRoutes;
