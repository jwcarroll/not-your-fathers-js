System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, stuff;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            stuff = { name: "foo" };
            console_1.console.log(stuff);
            stuff.name = "Josh";
            console_1.console.log(stuff);
        }
    };
});
//# sourceMappingURL=not-immutable.js.map