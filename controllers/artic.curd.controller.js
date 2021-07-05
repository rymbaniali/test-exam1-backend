'use strict'

//require artPiece 
const artPiece = require('../modals/artic.mongoose')

//post controller for creatind fav item
const creatFavItem = async (req, res) => {

    //destructure data from body
    const {
        title,
        artist_name,
        thumbnail,
        description
    } = req.body;

    const slug = title.toLowerCase().split(' ').join('-');

    artPiece.find({ slug: slug }, (error, data) => {
        if (data.length > 0) {
            res.send('already exist');

        } else {
            //creat new instance
            const newArtPiece = new artPiece({
                title : title,
                slug :slug,
                artist_name : artist_name,
                thumbnail : thumbnail,
                description :description
            });
            newArtPiece.save();
            res.send('item added')
        }
    })
};

//Get controller for reading restored data in db

const getFavArtItem = async (req, res) => {
    artPiece.find({}, (error, data) => {
        res.send(data)
    })
}

//delete controller for deleting fav item

const deleteFavArtItem = async (req, res) => {
    const slug = req.params.slug;

    artPiece.remove({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            artPiece.find({}, (error, data) => {
                res.send(data)
            })
        }
    })
}


//put controller for updating itmen in db

const updateFavArtItem = async (req, res) => {
    const { description } = req.params.description;
    const slug = req.params.slug;

    artPiece.find({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            data[0].description = description;
            data[0].save();

            artPiece.find({}, (error, data) => {
                res.send('deleted from fav items')
            })

        }
    })
}

module.exports={

    creatFavItem,getFavArtItem,
    deleteFavArtItem,updateFavArtItem
}