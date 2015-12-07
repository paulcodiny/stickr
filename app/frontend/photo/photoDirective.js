let angular = require('angular');

module.exports = function(PhotoService) {
    /**
     * Directive for main photo
     * Can upload new photo and be attachable for stickers
     */
    return {
        restrict: 'E',
        template: require('./photoDirective.html'),
        scope: true,
        link: function(scope) {
            scope.photo = PhotoService.getPhoto();

            scope.showPhotoUpload = function() {
                scope.photo = PhotoService.clearPhoto();
            };

            scope.handleDrop = function(e) {
                let sticker = angular.fromJson(e.dataTransfer.getData('text/plain'));

                // corrections for mouse
                sticker.top  = e.offsetY - sticker.top;
                sticker.left = e.offsetX - sticker.left;

                PhotoService.addSticker(sticker);
            };

            scope.$on('imageUploadDirective.imageUploaded', function(event, image) {
                scope.photo.fileSrc = image.src;

                // because it's not internal angular event
                // fire $watchers manually after $scope.photo updated
                scope.$apply();

                // clear input[type=file]
                image.element.val(null);
            });
        }
    };
};
