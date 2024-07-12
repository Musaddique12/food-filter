const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userSingup = require('./api/routes/Singup');
const food = require('./api/routes/Food')
const type = require('./api/routes/Type')
const category = require('./api/routes/Category')
const sweet = require('./api/routes/Sweets')
const snack = require('./api/routes/snacks')
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://mominmusaddique40:9766866541@cluster0.zlyu4mx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose.connection.on('connected', () => {
    console.log('Connected with database');
});
mongoose.connection.on('error', (err) => {
    console.log('Connection error:');
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/singup',userSingup);
app.use('/food',food);
app.use('/type',type);
app.use('/category',category)
app.use('/sweet',sweet)
app.use('/snack',snack)

// Default route handler
app.use((req, res) => {
    res.status(200).json({
        msg: 'ok'
    });
});

module.exports = app;
