'use strict'

class ArtModel {
    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail.lqip;
        this.artiest_name = data.artiest_title;
        this.description = data.description;

    }
}

module.exports= {ArtModel};