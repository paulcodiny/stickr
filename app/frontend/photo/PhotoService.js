let angular = require('angular');

module.exports = function() {
    const EMPTY_PHOTO = {
        fileSrc: null,
        stickers: []
    };

    this.photo = angular.copy(EMPTY_PHOTO);

    this.clearPhoto = function() {
        this.photo = angular.copy(EMPTY_PHOTO);

        return this.photo;
    };

    this.getPhoto = function() {
        return this.photo;
    };

    this.addSticker = function(sticker) {
        this.photo.stickers.push(sticker);
    };

    return this;
};
