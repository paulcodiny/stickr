module.exports = function() {
    /**
     * Add ability to upload image file via FileReader::readAsDataURL
     * @example <input type="file" name="file" ps-image-upload>
     *
     * @fires imageUploadDirective.imageUploaded
     * @type {object}
     * @property {string} src base64 presentation of the uploaded file
     * @property {jqLite} element input[type=file], i.e. can be cleared next
     */
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.attr('accept', 'image/*');

            // solution for uploading files got here
            // https://github.com/danialfarid/ng-file-upload/blob/master/src/select.js#L110
            // because of this
            // https://github.com/angular/angular.js/issues/1375
            element.bind('change', function(event) {
                let files = event.target.files;

                // allow multiple uploads
                for (let i = 0, f; f = files[i]; i++) {

                    // only process image files
                    if (!f.type.match('image.*')) {
                        continue;
                    }

                    let reader = new FileReader();

                    reader.onload = function(e) {
                        scope.$emit('imageUploadDirective.imageUploaded', {
                            src: e.target.result,
                            element: element
                        });
                    };

                    reader.readAsDataURL(f);
                }
            });
        }
    };
};
