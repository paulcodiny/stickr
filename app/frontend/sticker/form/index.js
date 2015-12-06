require('./stickerForm.less');

require('angular')
    .module('ps')

    .controller('StickerFormCtrl', ['$scope', require('./StickerFormCtrl.js')])
;
