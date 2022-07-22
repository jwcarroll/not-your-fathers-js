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
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
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
            spreadTot = common_js_1.sum.apply(void 0, __spreadArray([], __read(nums), false));
            joshTot = common_js_1.nameSum.apply(void 0, __spreadArray(['Josh'], __read(nums), false));
            console_1.console.stream('spread')
                .log(spreadTot)
                .log(joshTot);
            first = [1, 2, 3];
            second = [4, 5, 6];
            both = __spreadArray(__spreadArray([], __read(first), false), __read(second), false);
            splice = __spreadArray(__spreadArray(__spreadArray([], __read(first), false), ['Josh'], false), __read(second), false);
            console_1.console.stream('concat')
                .log(both)
                .log(splice);
            newFirst = __spreadArray(__spreadArray([], __read(first), false), [100], false);
            console_1.console.stream('new-array')
                .log("first:    ".concat(first))
                .log("newFirst: ".concat(newFirst));
            letters = __spreadArray([], __read("Spread is Awesome!!!"), false);
            console_1.console.stream("iterables")
                .log(letters);
        }
    };
});
//# sourceMappingURL=spread-operator.js.map