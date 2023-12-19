const express = require('express');
const router = express.Router;

const controller = require('../controllers/adminController');

router.get('/', controller.admin);
router.get('/create', controller.createNewItem);
router.post('/create', controller.addNewItem);
router.get('/edit/:id', controller.editItemEsp);
router.put('/edit/:id', controller.modItemEsp);
router.delete('/delete/:id', controller.deleteItemEsp);

module.exports = router;
