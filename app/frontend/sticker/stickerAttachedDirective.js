module.exports = function() {
    /**
     * Directive for attaching stickers to photo
     * create sticker options to attributes top/left and add css class 'photo-main-sticker'
     * requires sticker object from parent scope with top/left options
     */
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.addClass('photo-main-sticker');
            attr.$set('style', `top: ${scope.sticker.top}px; left: ${scope.sticker.left}px`);
        }
    }
};
