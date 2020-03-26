System.register(["console", "./common.js"], function (exports_1, context_1) {
    "use strict";
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var console_1, common_js_1, nums, total, spreadTot, joshTot, first, second, both, splice, newFirst, letters;
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
            spreadTot = common_js_1.sum.apply(void 0, __spread(nums));
            joshTot = common_js_1.nameSum.apply(void 0, __spread(['Josh'], nums));
            console_1.console.stream('spread')
                .log(spreadTot)
                .log(joshTot);
            first = [1, 2, 3];
            second = [4, 5, 6];
            both = __spread(first, second);
            splice = __spread(first, ['Josh'], second);
            console_1.console.stream('concat')
                .log(both)
                .log(splice);
            newFirst = __spread(first, [100]);
            console_1.console.stream('new-array')
                .log("first:    " + first)
                .log("newFirst: " + newFirst);
            letters = __spread("Spread is Awesome!!!");
            console_1.console.stream("iterables")
                .log(letters);
        }
    };
});
//# sourceMappingURL=spread-operator.js.map