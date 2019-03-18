System.register(["console", "./common.js"], function (exports_1, context_1) {
    "use strict";
    var console_1, common_js_1, nums, total, spreadTot, joshTot, first, second, both, splice, newFirst;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            },
            function (common_js_1_1) {
                common_js_1 = common_js_1_1;
            }
        ],
        execute: function () {
            nums = [5, 10, 15];
            total = common_js_1.sum.apply(this, nums);
            console_1.console.log(total);
            spreadTot = common_js_1.sum.apply(void 0, nums);
            joshTot = common_js_1.nameSum.apply(void 0, ['Josh'].concat(nums));
            console_1.console.stream('spread')
                .log(spreadTot)
                .log(joshTot);
            first = [1, 2, 3];
            second = [4, 5, 6];
            both = first.concat(second);
            splice = first.concat(['Josh'], second);
            console_1.console.stream('concat')
                .log(both)
                .log(splice);
            newFirst = first.concat([100]);
            console_1.console.stream('new-array')
                .log("first:    " + first)
                .log("newFirst: " + newFirst);
        }
    };
});
//# sourceMappingURL=spread-operator.js.map