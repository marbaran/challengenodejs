const express = require('express');
const router = express.Router;

const adminControllers = require('../controllers/adminController');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createNewItem);
router.post('/create', adminControllers.addNewItem);
router.get('/edit/:id', adminControllers.editItemEsp);
router.put('/edit/:id', adminControllers.modItemEsp);
router.delete('/delete/:id', adminControllers.deleteItemEsp);

module.exports = router;
