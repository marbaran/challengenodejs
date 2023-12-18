const express = require('express');
const router = express.Router;

router.get('/home', (rep, req) => res.send('Esta es la vista de HOME'));
router.get('/contact', (rep, req) => res.send('Esta es la vista de CONTACTO'));
router.get('/about', (rep, req) => res.send('Esta es la vista SOBRE NOSOTROS'));
router.get('/faqs', (rep, req) => res.send('Esta es la vista de PREGUNTAS FRECUENTES'));

module.exports = router;
