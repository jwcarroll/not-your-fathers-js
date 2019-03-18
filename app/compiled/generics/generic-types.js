System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, nums;
    var __moduleName = context_1 && context_1.id;
    function forEach(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            nums = [1, 2, 3, 4, 5];
            forEach(nums, function (num, i, list) {
                var previous = list[i - 1] || 0;
                var total = list[i] + previous;
                console_1.console.log("\n    " + list[i] + " + " + previous + " = " + total + "\n");
            });
        }
    };
});
//# sourceMappingURL=generic-types.js.map