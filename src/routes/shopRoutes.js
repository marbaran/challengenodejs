const express = require('express');
const router = express.Router;

router.get('/', (rep, req) => res.send('Esta es la vista de SHOP'));
router.get('/item/:id', (rep, req) => res.send('Esta es la vista del item seleccionado'));
router.post('/item/:id/add', (rep, req) => res.send('Esta es la ruta para agregar un nuevo item'));
router.get('/cart', (rep, req) => res.send('Esta es la vista del carrito'));
router.post('/cart', (rep, req) => res.send('Esta es la ruta para agregar un item al carrito'));

module.exports = router;
