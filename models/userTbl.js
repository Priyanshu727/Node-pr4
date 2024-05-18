const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    ISBN: {
        type: Number,
        require: true
    },
    price: {
        type: String,
        require: true
    },

});

const userDB = mongoose.model("userTbl", userSchema);

module.exports = userDB;