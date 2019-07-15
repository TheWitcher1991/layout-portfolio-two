/* eslint-env node, mocha */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(name) {
        _classCallCheck(this, Main);

        this.name = name;
    }

    _createClass(Main, [{
        key: 'render',
        get: function get() {
            console.log(this.name);
            return true;
        }
    }]);

    return Main;
}();

(function () {

    var app = new Main('website');
    if (app) app.render;
})();