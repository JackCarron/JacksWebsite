const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
    email_address: {
        type: String
    },
    subject: {
        type: String
    },
    body: {
        type: String
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', Message);