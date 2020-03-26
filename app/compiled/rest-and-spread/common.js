System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function sum() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (tot, cur) { return tot + cur; }, 0);
    }
    exports_1("sum", sum);
    function nameSum(name) {
        var _a;
        var nums = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nums[_i - 1] = arguments[_i];
        }
        var tot = nums.reduce(function (tot, cur) { return tot + cur; }, 0);
        return _a = {}, _a[name] = tot, _a;
    }
    exports_1("nameSum", nameSum);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=common.js.map