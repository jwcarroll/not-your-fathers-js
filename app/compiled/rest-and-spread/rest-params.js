System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, total, val;
    var __moduleName = context_1 && context_1.id;
    function sum() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (tot, cur) { return tot + cur; }, 0);
    }
    function nameSum(name) {
        var _a;
        var nums = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nums[_i - 1] = arguments[_i];
        }
        var tot = nums.reduce(function (tot, cur) { return tot + cur; }, 0);
        return _a = {}, _a[name] = tot, _a;
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            total = sum(5, 10, 20);
            console_1.console.log(total);
            val = nameSum('Josh', 5, 10);
            console_1.console.stream('nameSum')
                .log(val);
        }
    };
});
//# sourceMappingURL=rest-params.js.map