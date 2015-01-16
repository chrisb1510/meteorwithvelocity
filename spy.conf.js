/**
 * Created by chris on 24/10/14.
 */
exports = function ($) {

    $.name = 'my project';

    $.root = 'http://localhost:3000/';

    $.proxy = 3004;

    // local property is NOT required when using WebStorm integration,
    // as the IDE automatically tracks local project files for you
    //$.local = 'c:\\myproject\\';

    $.mapper = function (url) {
        if (url.indexOf('jquery') >= 0) {
            return {
                instrument: false
            };
        }

        if (url.indexOf('underscore-1.4.4.min.js') >= 0) {
            return {
                instrument: {
                    prettify: true,
                    objectDump: false
                }
            };
        }

        return {
            // local property is NOT required when using WebStorm integration,
            // as the IDE automatically tracks local project files for you
            //local: true,
            instrument: {
                prettify: false,
                objectDump: {
                    depth: 1,
                    propertyNumber: 3,
                    arrayLength: 3,
                    stringLength: 50
                }
            }
        };
    };

    $.eventFilter = {
        globalScope: false,
        timeout: true,
        interval: true,
        events: ['click']
    };
};