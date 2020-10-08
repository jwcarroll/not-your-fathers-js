System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1;
    var __moduleName = context_1 && context_1.id;
    function printName(obj) {
        var _a;
        var msg = "Hello " + ((_a = obj === null || obj === void 0 ? void 0 : obj.name) === null || _a === void 0 ? void 0 : _a.first);
        console_1.console.log(msg);
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            printName({ name: { first: "Josh" } });
            printName({ name: {} });
            printName({});
            printName(undefined);
        }
    };
});
//# sourceMappingURL=the-solution.js.map