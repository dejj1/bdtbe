const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 8
    },
    comment: {
        type: String,
        required: true,
        min: 3
    }
},{timestamps: true})

const User = mongoose.model("User", UserSchema)
module.exports = User