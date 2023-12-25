const express = require('express');
const { maleCreateProducts,
    femaleCreateProducts,
    getProducts,
    getProductsById,
    getQueryProducts
} = require('../controller/productController');
const router = express.Router()

// Product routes
router.post('/product/Maleproduct', maleCreateProducts);
router.post('/product/Femaleproduct', femaleCreateProducts);
router.get('/getproduct', getProducts);
router.get('/getQueryproduct', getQueryProducts);
router.get('/getproductbyId', getProductsById);

module.exports = router