const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        min: 4,
        max: 255,
    },
    Password: {
        type: String,
        required: true,
        min: 4,
        max: 1024,
    },
    Type: {
        type: Number,
        default: 2,
    },
});

module.exports = mongoose.model("User", userSchema);