const express = require('express');
const { registerUser,
    loginUser,
    getUser,
    addAddress
} = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router()

// Users routes
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/getuserData', authMiddleware, getUser);
router.put('/addAddress', authMiddleware, addAddress);

module.exports = router