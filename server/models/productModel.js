const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    fabric: {
        type: String
    },
    packof: {
        type: Number
    },
    image: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    styleCode: {
        type: String
    },
    count: {
        type: Number,
        required: true
    },
    // Fields specific to Male Product
    size: [{
        type: String,
        required: true
    }],
    fit: {
        type: String
    },
    NeckType: {
        type: String
    },
    // Fields specific to Female Product
    sariLength: {
        type: String
    },
    weight: {
        type: String
    },
    pattern: {
        type: String
    },
    sariStyle: {
        type: String
    },
    occasion: {
        type: String
    },
});

module.exports = mongoose.model('product', productSchema);
