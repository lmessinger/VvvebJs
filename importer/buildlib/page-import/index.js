'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = require('request');

exports.default = function (url) {
    (0, _request.get)(url, function (data) {
        console.log(data);
    });
};
//# sourceMappingURL=index.js.map