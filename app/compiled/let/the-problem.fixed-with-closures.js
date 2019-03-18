System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, i;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            for (i = 0; i < 10; i++) {
                (function (i) {
                    setTimeout(function () {
                        console_1.console.log(i);
                    });
                })(i);
            }
        }
    };
});
//# sourceMappingURL=the-problem.fixed-with-closures.js.map