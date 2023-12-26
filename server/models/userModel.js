const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    addresses: [{
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zipCode: {
            type: String
        },
        country: {
            type: String
        },
    }
    ],
},
    { timestamps: true }
)

module.exports = mongoose.model("user", UserSchema)