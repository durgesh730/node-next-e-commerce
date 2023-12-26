const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header' });
     // add Bearer before token
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.jwtKey, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        req.userId = decoded.userId;
        next();
    });
};

module.exports = authMiddleware;
