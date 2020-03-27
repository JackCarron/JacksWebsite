const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

mongoose.connect('mongodb://127.0.0.1:27017/messages', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Init Middleware
app.use(express.json({ extended: false}));

// Controller that handles /messages
app.use('/messages', require('./routes/messages.js'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});