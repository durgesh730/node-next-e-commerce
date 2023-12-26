const express = require('express');
const {
    CreateProducts,
    getProducts,
    getProductsById,
    getQueryProducts
} = require('../controller/productController');
const router = express.Router()

// Product routes
router.post('/createproduct', CreateProducts);
router.get('/getproduct', getProducts);
router.get('/getQueryproduct/:q', getQueryProducts);
router.get('/getproductbyId/:id', getProductsById);

module.exports = router