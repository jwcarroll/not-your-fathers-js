System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, stuff;
    var __moduleName = context_1 && context_1.id;
    // 500 lines of code later
    function doStuff() {
        doOtherStuff();
    }
    // 7000 lines of code later
    function doOtherStuff() {
        // Tried to put in a 'var' here
        // but the application broke.
        // Leaving it off seems to work.
        // YOLO!
        stuff = [1, 2, 4];
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            stuff = { name: "foo" };
            console_1.console.log(stuff);
            doStuff();
            console_1.console.log(stuff);
        }
    };
});
//# sourceMappingURL=the-problem.js.map