module.exports = function($rootScope, $document, $compile) {
    /**
     * Factory for creation modal dialogs
     *
     * @param {Scope} $scope Scope object (workaround to create new scopes in factories, used for $compile)
     * @param {string} tpl String with template inside modal window
     * @param {int} [width = 400] Width in px
     * @param {int} [height = 200] Height in px
     *
     * @example
     *   let modal = ModalDialogFactory('<p>Hello, world!</p>', 200);
     *   modal.show();
     *
     * @return modal instance with methods show/hide
     */
    return function(tpl, width = 400, height = 200) {
        let scope = $rootScope.$new(true);
        scope.show = false;

        function show() {
            scope.show = true;
        }

        function hide() {
            scope.show = false;
        }

        let template = `<ps-modal-dialog show="show" width="${width}px" height="${height}px">${tpl}</ps-modal-dialog>`;
        let linkFn = $compile(template);
        let content = linkFn(scope);

        $document.find('body').append(content);

        return {
            show: show,
            hide: hide
        };
    }
};
