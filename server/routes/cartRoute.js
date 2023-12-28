const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createProductCart,
    getProductFromCart,
    deleteProductFromCart,
    updateProductFromCart,
} = require('../controller/cartController');

const router = express.Router()

// Cart routes
router.post('/createproducts', authMiddleware, createProductCart);
router.get('/getproducts', authMiddleware, getProductFromCart);
router.delete('/deleteproducts', deleteProductFromCart);
router.put('/updateproducts/:q', updateProductFromCart);

module.exports = router