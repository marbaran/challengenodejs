const express = require('express');
const router = express.Router;

const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemSel);
router.post('/item/:id/add', shopControllers.newItem);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.addItemCart);

module.exports = router;
