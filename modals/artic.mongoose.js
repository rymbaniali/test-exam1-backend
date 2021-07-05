'use strict'

const mongoose = require('mongoose');

const artPieceSchema = mongoose.Schema({

    title: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    thumbnail: String,
    artist_name: String,
    description: String


})

const artPieceModel = mongoose.model('art_piece', artPieceSchema)

module.exports = artPieceModel;