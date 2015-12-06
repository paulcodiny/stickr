let angular = require('angular');

module.exports = function(PhotoService) {
    let tpl = require('./photoDirective.html');

    /**
     * Directive for main photo
     * Can upload new photo and be attachable for stickers
     */
    return {
        restrict: 'E',
        template: tpl,
        scope: true,
        link: function(scope, element) {
            scope.photo = PhotoService.getPhoto();

            scope.showPhotoUpload = function() {
                scope.photo = PhotoService.clearPhoto();
            };

            scope.$on('imageUploadDirective.imageUploaded', function(event, image) {
                scope.photo.fileSrc = image.src;

                // because it's not internal angular event
                // fire $watchers manually after $scope.photo updated
                scope.$apply();

                // clear input[type=file]
                image.element.val(null);
            });

            scope.handleDrop = function(e) {
                let sticker = angular.fromJson(e.dataTransfer.getData('text/plain'));

                // corrections for mouse
                sticker.top  = e.offsetY - sticker.top;
                sticker.left = e.offsetX - sticker.left;

                PhotoService.addSticker(sticker);
            }
        }
    };
};
