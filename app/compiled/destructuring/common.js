System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var lodash_1;
    var __moduleName = context_1 && context_1.id;
    function getMinMax() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var min = lodash_1.default.min(nums);
        var max = lodash_1.default.max(nums);
        return [min, max];
    }
    exports_1("getMinMax", getMinMax);
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=common.js.map