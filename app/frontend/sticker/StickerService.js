module.exports = function() {
    this.stickers = [];

    this.getStickers = function() {
        return this.stickers;
    };

    this.addSticker = function(sticker) {
        this.stickers.unshift(sticker);
    };

    return this;
};
