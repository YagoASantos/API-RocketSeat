const Router = require('express');
const techController = require('../controllers/techController');

const router = Router();

router.get('/techs', techController.catchAll);
router.post('/techs', techController.catchAll);

module.exports = router;
