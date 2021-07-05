'use strict';

//require pakage
const express = require('express');
const cors = require('cors');
//initaliza app
const app = express();
//require mongoose

const mongoose = require('mongoose');

//dotenv
require('dotenv').config();

//define PORT
const PORT = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());

//require controller
const articController = require('./controllers/artic.controller');
const curd = require('./controllers/artic.curd.controller');

//connect mongoose 
mongoose.connect('mongodb://localhost:27017/art', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//end points

//proof life endpoint
app.get('/', (req, res) => {
    res.send('working')
});

app.get('/art', articController.getArtData);

//curd point 
app.post('/art/favorite', curd.creatFavItem);
app.get('/art/favorite', curd.getFavArtItem);
app.delete('/art/favorite/:slug', curd.deleteFavArtItem);
app.put('/art/favorite/:slug', curd.updateFavArtItem);

//proof server
app.listen(PORT, () => {
    console.log(`working on ${PORT}`);
});