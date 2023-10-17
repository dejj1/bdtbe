const mongoose = require("mongoose")
const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
    }
}, {timestamps: true})

const newsletter = mongoose.model("newsletter", newsletterSchema)
module.exports = newsletter