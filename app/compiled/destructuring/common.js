System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getMinMax() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var min = Math.min.apply(Math, nums);
        var max = Math.max.apply(Math, nums);
        return [min, max];
    }
    exports_1("getMinMax", getMinMax);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=common.js.map