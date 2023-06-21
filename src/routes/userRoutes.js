const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.catchAll);
routes.get('/users/:userId', UserController.catchOne);
routes.post('/users', UserController.createUser);

module.exports = routes;