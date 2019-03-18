System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            var _loop_1 = function (i) {
                setTimeout(function () {
                    console_1.console.log(i);
                });
            };
            for (var i = 0; i < 10; i++) {
                _loop_1(i);
            }
        }
    };
});
//# sourceMappingURL=using-let.js.map