const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book');

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log("database is not connecetd.");
        return false;
    }
    console.log("database connected succesfully");
})


module.exports = db;