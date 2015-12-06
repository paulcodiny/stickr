module.exports = function($scope, StickerService, ModalDialogFactory) {
    // set list of stickers
    $scope.stickers = StickerService.getStickers();

    // create modal with form
    $scope.modal = ModalDialogFactory($scope, require('./form/stickerForm.html'));

    $scope.addStickerToList = function(event, sticker) {
        StickerService.addSticker(sticker);
        $scope.modal.hide();
    };

    $scope.$on('sticker.created', $scope.addStickerToList);
};
