const express = require('express');
const {
    CreateProducts,
    // femaleCreateProducts,
    getProducts,
    getProductsById,
    getQueryProducts
} = require('../controller/productController');
const router = express.Router()

// Product routes
router.post('/createproduct', CreateProducts);
router.get('/getproduct', getProducts);
router.get('/getQueryproduct', getQueryProducts);
router.get('/getproductbyId', getProductsById);

module.exports = router