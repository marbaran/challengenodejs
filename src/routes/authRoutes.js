const express = require('express');
const router = express.Router;

const authControllers = require('../controllers/authController');

router.get('/login', authControllers.login);
router.post('/login', authControllers.valDatLogin);
router.get('/register', authControllers.register);
router.post('/register', authControllers.createNewUser);
router.post('/logout', authControllers.closeSesUser);

module.exports = router;
