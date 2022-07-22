System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1;
    var __moduleName = context_1 && context_1.id;
    function printName(obj) {
        var msg = "Hello ".concat(obj.name.first);
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
//# sourceMappingURL=the-problem.js.map