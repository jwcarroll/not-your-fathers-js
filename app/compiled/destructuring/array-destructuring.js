System.register(["console", "./common.js"], function (exports_1, context_1) {
    "use strict";
    var console_1, common_js_1, family, husband, wife, kids, printFirst, printRest, nums, _a, min, max, _b, _c, a, _d, b;
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
                { name: 'Hadassah', age: 8 },
                { name: 'Elijah', age: 6 },
                { name: 'Caleb', age: 4 },
                { name: 'Isaiah', age: 2 }
            ]);
            husband = family[0], wife = family[1], kids = family.slice(2);
            console_1.console.log(husband);
            console_1.console.log(wife);
            console_1.console.log(kids);
            printFirst = function (_a) {
                var first = _a[0];
                console_1.console.stream('printFirst')
                    .log(first);
            };
            printFirst(family);
            printRest = function (_a) {
                var first = _a[0], rest = _a.slice(1);
                console_1.console.stream('printRest')
                    .log(rest);
            };
            printRest(family);
            nums = [5, 1, 25, 100];
            _a = common_js_1.getMinMax.apply(void 0, nums), min = _a[0], max = _a[1];
            console_1.console.stream('minMax')
                .log("min: " + min + ", max: " + max);
            _b = [5], _c = _b[0], a = _c === void 0 ? 0 : _c, _d = _b[1], b = _d === void 0 ? 0 : _d;
            console_1.console.stream('default-vals')
                .log("a: " + a)
                .log("b: " + b);
        }
    };
});
//# sourceMappingURL=array-destructuring.js.map