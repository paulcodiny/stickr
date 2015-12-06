module.exports = function($document, $compile) {
    /**
     * Factory for creation modal dialogs
     *
     * @param {Scope} $scope Scope object (workaround to create new scopes in factories, used for $compile)
     * @param {string} tpl String with template inside modal window
     * @param {int} width
     * @param {int} height
     *
     * @example
     *   let modal = ModalDialogFactory($scope, '<p>Hello, world!</p>', 200);
     *   modal.show();
     *
     * @return modal instance with methods show/hide
     */
    return function($scope, tpl, width = 400, height = 200) {
        let scope = $scope.$new(true);
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
