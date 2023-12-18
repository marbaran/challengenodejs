const express = require('express');
const router = express.Router;

router.get('/', (rep, req) => res.send('Esta es la vista de ADMIN'));
router.get('/create', (rep, req) => res.send('Esta es la vista para crear un nuevo item'));
router.post('/create', (rep, req) => res.send('Esta es la vista para agregar un nuevo item'));
router.get('/edit/:id', (rep, req) => res.send('Esta es la vista para editar un item específico'));
router.put('/edit/:id', (rep, req) => res.send('Esta es la vista para impactar la modificación de un item específico'));
router.delete('/delete/:id', (rep, req) => res.send('Esta es la vista para eliminar un item específico'));

module.exports = router;
