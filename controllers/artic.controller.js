'use strict'

//require data model
const articModal = require('../modals/artic.mongoose');
const superagent = require('superagent')

const getArtData = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks?limits=10`

    superagent.get(url).then(data => {
        const responseData = data.body.data.map(art => {
            return new articModal(art)
        })
        res.send(responseData)
    }).catch(error => {
        console.log(error);
    })
};

module.exports = { getArtData };