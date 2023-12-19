const express = require('express');
const router = express.Router;

const controller = require('../controllers/shopController');

router.get('/', controller.shop);
router.get('/item/:id', controller.itemSel);
router.post('/item/:id/add', controller.newItem);
router.get('/cart', controller.cart);
router.post('/cart', controller.addItemCart);

module.exports = router;
