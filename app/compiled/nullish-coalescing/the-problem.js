System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1;
    var __moduleName = context_1 && context_1.id;
    function printName(obj, stream) {
        var _a;
        if (stream === void 0) { stream = "default"; }
        var name = ((_a = obj === null || obj === void 0 ? void 0 : obj.name) === null || _a === void 0 ? void 0 : _a.first) || "friend";
        var msg = "Hello " + name;
        console_1.console.stream(stream)
            .log(msg);
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
            printName({ name: { first: "" } }, "falsy");
            printName({ name: { first: 0 } }, "falsy");
            printName({ name: { first: false } }, "falsy");
        }
    };
});
//# sourceMappingURL=the-problem.js.map