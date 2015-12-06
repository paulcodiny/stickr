module.exports = function($scope) {
    /**
     * @event sticker.created Fires when sticker created
     * @type {object}
     * @property {string} title
     * @property {string} image base64 presentation of the sticker image
     */

    let fileInput;

    $scope.sticker = {};

    $scope.createSticker = function() {
        $scope.$emit('sticker.created', $scope.sticker);
        $scope.reset(fileInput);
    };

    $scope.$on('imageUploadDirective.imageUploaded', function(event, image) {
        $scope.sticker.image = image.src;

        // workaround for clear input, so sorry
        fileInput = image.element;

        event.stopPropagation();
    });

    $scope.reset = function() {
        $scope.sticker = {};
        fileInput.val(null);
    };
};
