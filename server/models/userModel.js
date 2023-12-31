const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: false,
        default: 'ABC'
    },
    lastName: {
        type: String,
        required: false,
        default: "XYZ"
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false,
        default: 'xxxxxxxxx88'
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: false,
        default:"https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1704008588~exp=1704009188~hmac=c12badd95f4d66c303cfb6fa84786e1f7e6a37b5c911578f3ab933f890b8a4ad"
    },
    addresses: [{
        street: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        zipCode: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        },
    }
    ],
},
    { timestamps: true }
)

module.exports = mongoose.model("user", UserSchema)