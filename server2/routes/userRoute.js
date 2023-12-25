const express = require('express');
const { registerUser,
    loginUser,
    getUsersEndpoint,
    addAddress
} = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router()

// Users routes
router.post('/user/signup', registerUser);
router.post('/user/login', loginUser);
router.get('/user/getuserData/', authMiddleware, getUsersEndpoint);
router.put('/user/AddAddress/', authMiddleware, addAddress);

module.exports = router