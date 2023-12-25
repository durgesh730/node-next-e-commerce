const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ userId: id }, process.env.jwtKey, { expiresIn: '24h' });
}

module.exports = generateToken