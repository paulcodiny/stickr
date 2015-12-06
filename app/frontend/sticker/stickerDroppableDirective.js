let angular = require('angular');

module.exports = function() {
    /**
     * Add ability for sticker to be dropped on that element
     */
    return {
        restrict: 'A',
        scope: {
            droppableHandler: '='
        },
        link: function(scope, element) {
            function handleDragEnter(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                e.dataTransfer.dropEffect = 'copy';

                return false;
            }

            function handleDragOver(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                e.dataTransfer.dropEffect = 'copy';

                return false;
            }

            function handleDrop(e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                }

                scope.droppableHandler(e);

                scope.$apply();

                return false;
            }

            element.on('dragenter', handleDragEnter);
            element.on('dragover', handleDragOver);
            element.on('drop', handleDrop);

            element.on('$destroy', element.off);
        }
    };
};
