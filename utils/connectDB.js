const mongoose = require("mongoose");
const keys = require('../config/keys')

const connectDB = () => {
    try {
        const connection = await mongoose.connect()
    } catch (err) {
        console.log('Could not connect to DB. Error: ', err);
    }
};
