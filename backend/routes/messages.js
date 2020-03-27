const express = require('express');
const Message = require('../models/message.model.js');
const messageRoutes = express.Router();

messageRoutes.route('/add').post(function(req, res) {
    let message = new Message(req.body);
    console.log(message);
    message.save()
        .then(todo => {
            res.status(200).json({'message': 'message added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new message failed');
        });
});

module.exports = messageRoutes;