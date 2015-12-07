module.exports = function() {
    /**
     * Directive for attaching stickers to a photo
     * Convert sticker options to attributes "top/left" and add a CSS class 'photo-main-sticker'
     * Requires a sticker object from a parent scope with "top/left" options
     */
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.addClass('photo-main-sticker');
            attr.$set('style', `top: ${scope.sticker.top}px; left: ${scope.sticker.left}px`);
        }
    }
};
