const express = require('express');
const router = express.Router;

const controller = require('../controllers/authController');

router.get('/login', controller.login);
router.post('/login', controller.valDatLogin);
router.get('/register', controller.register);
router.post('/register', controller.createNewUser);
router.post('/logout', controller.closeSesUser);

module.exports = router;
