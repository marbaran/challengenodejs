const express = require('express');
const router = express.Router;

router.get('/login', (rep, req) => res.send('Esta es la vista de LOGIN'));
router.post('/login', (rep, req) => res.send('Esta es la ruta que valida los datos de LOGIN'));
router.get('/register', (rep, req) => res.send('Esta es la vista de REGISTER'));
router.post('/register', (rep, req) => res.send('Esta es la ruta que crea un nuevo usuario'));
router.post('/logout', (rep, req) => res.send('Esta es la ruta que cierra la sesión del usuario'));

module.exports = router;
