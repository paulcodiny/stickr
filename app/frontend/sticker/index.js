require('angular')
    .module('ps')

    .controller('StickerCtrl', ['$scope', 'StickerService', 'ModalDialogFactory', require('./StickerCtrl.js')])

    .service('StickerService', require('./StickerService.js'))

    .directive('psSticker', require('./stickerDirective.js'))
    .directive('psStickerDroppable', require('./stickerDroppableDirective.js'))
    .directive('psStickerAttached', require('./stickerAttachedDirective.js'))
;

require('./form/index.js');
