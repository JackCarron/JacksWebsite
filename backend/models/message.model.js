const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email_address: {
        type: String
    },
    phone_number: {
        type: String
    },
    body: {
        type: String
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', Message);