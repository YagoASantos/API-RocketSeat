const express = require('express');
const AddressController = require('../controllers/AdressController');

const router = express.Router();

router.get('/addresses', AddressController.catchAll);
router.post('/users/:userId/adresses', AddressController.createAddress);

module.exports = router;