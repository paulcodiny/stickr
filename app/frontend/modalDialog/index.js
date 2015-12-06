require('./modalDialogDirective.less');

require('angular')
    .module('ps')

    .factory('ModalDialogFactory', ['$document', '$compile', require('./ModalDialogFactory.js')])

    .directive('psModalDialog', require('./modalDialogDirective.js'))
;
