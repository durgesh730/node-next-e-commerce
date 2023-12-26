const mongoose = require('mongoose')
require('dotenv').config();

// Connect to MongoDB
const connectdb = () => {
    mongoose.connect(process.env.MONGO_DB)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectdb