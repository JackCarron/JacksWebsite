const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const Message = require('./models/message.model.js')
const messageRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/messages', messageRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/messages', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

messageRoutes.route('/').get(function(req, res) {
    Message.find(function(err, messages) {
        if(err) {
            console.log(err);
        } else {
            res.json(messages);
        }
    });
});

messageRoutes.route('/add').post(function(req, res) {
    let message = new Message(req.body);
    message.save()
        .then(todo => {
            res.status(200).json({'message': 'message added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new message failed');
        });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});