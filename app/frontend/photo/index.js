require('angular')
    .module('ps')

    .service('PhotoService', require('./PhotoService.js'))

    .directive('psPhoto', ['PhotoService', require('./photoDirective.js')])
;
