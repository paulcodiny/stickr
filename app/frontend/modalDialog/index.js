require('./modalDialogDirective.less');

require('angular')
    .module('ps')

    .factory('ModalDialogFactory', ['$rootScope', '$document', '$compile', require('./ModalDialogFactory.js')])

    .directive('psModalDialog', require('./modalDialogDirective.js'))
;
