let angular = require('angular');

module.exports = function() {
    return {
        restrict: 'E',
        template: require('./stickerDirective.html'),
        scope: {
            title: '@',
            image: '@',
            draggable: '@'
        },

        link: function(scope, element) {
            element.on('dragstart', function(e) {
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('text/plain', angular.toJson({
                    title: scope.title,
                    image: scope.image,
                    top:   e.offsetY,
                    left:  e.offsetX
                }));
            });
        }
    };
};

