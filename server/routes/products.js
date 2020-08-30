const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/', productsCtrl.get_all_products);
router.get('/:id', productsCtrl.get_single_product);
router.post('/', productsCtrl.post_new_product);
router.delete('/:id', productsCtrl.delete_product);
router.put('/:id', productsCtrl.update_product);

module.exports = router;