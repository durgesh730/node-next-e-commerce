const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    totalItem: {
        type: Number,
        required: true,
        default: 1
    },
});

// Define and export the model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
