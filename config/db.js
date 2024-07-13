const mongoose = require("mongoose");

// Connect to MongoDB database e-dukhan
const DBConnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/e-dukhan', {})
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = DBConnect;