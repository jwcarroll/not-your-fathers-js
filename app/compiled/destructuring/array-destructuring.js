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
    var console_1, common_js_1, family, _a, husband, wife, kids, printFirst, printRest, nums, _b, min, max, _c, _d, a, _e, b;
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
            exports_1("family", family = [
                { name: 'Josh', age: 38 },
                { name: 'Patty', age: 38 },
                { name: 'Hadassah', age: 11 },
                { name: 'Elijah', age: 9 },
                { name: 'Caleb', age: 7 },
                { name: 'Isaiah', age: 5 },
                { name: 'Ruth', age: 3 }
            ]);
            _a = __read(family), husband = _a[0], wife = _a[1], kids = _a.slice(2);
            console_1.console.log(husband);
            console_1.console.log(wife);
            console_1.console.log(kids);
            printFirst = function (_a) {
                var _b = __read(_a, 1), first = _b[0];
                console_1.console.stream('printFirst')
                    .log(first);
            };
            printFirst(family);
            printRest = function (_a) {
                var _b = __read(_a), first = _b[0], rest = _b.slice(1);
                console_1.console.stream('printRest')
                    .log(rest);
            };
            printRest(family);
            nums = [5, 1, 25, 100];
            _b = __read(common_js_1.getMinMax.apply(void 0, __spread(nums)), 2), min = _b[0], max = _b[1];
            console_1.console.stream('minMax')
                .log("min: " + min + ", max: " + max);
            _c = __read([5], 2), _d = _c[0], a = _d === void 0 ? 0 : _d, _e = _c[1], b = _e === void 0 ? 0 : _e;
            console_1.console.stream('default-vals')
                .log("a: " + a)
                .log("b: " + b);
        }
    };
});
//# sourceMappingURL=array-destructuring.js.map