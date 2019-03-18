System.register([], function (exports_1, context_1) {
    "use strict";
    var FakeService;
    var __moduleName = context_1 && context_1.id;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return {
        setters: [],
        execute: function () {
            FakeService = /** @class */ (function () {
                function FakeService() {
                }
                FakeService.prototype.getValue = function () {
                    return new Promise(function (res, rej) {
                        var timeout = getRandomInt(500, 2000);
                        var value = getRandomInt(0, 100);
                        setTimeout(function () {
                            res(value);
                        }, timeout);
                    });
                };
                FakeService.prototype.multiply = function (a, b) {
                    return new Promise(function (res, rej) {
                        var timeout = getRandomInt(500, 2000);
                        setTimeout(function () {
                            res(a * b);
                        }, timeout);
                    });
                };
                return FakeService;
            }());
            exports_1("FakeService", FakeService);
        }
    };
});
//# sourceMappingURL=fake-service.js.map