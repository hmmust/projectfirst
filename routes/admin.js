const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
router.get('/add-product',adminController.getAddProduct);
router.post('/add-product',adminController.postAddProduct);
router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);
router.get('/delete-product/:ProductId',adminController.getDeleteProduct);
module.exports = router;