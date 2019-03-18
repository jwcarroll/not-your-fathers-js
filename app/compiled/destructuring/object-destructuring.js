System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var console_1, family, josh, name, age, jName, jAge, totalAges, whatAboutBob, defaults, slow, cloned;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
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
            josh = family[0];
            name = josh.name, age = josh.age;
            console_1.console.log(name);
            console_1.console.log(age);
            jName = josh.name, jAge = josh.age;
            console_1.console.stream('new-property-names')
                .log(jName)
                .log(jAge);
            totalAges = 0;
            family.forEach(function (_a) {
                var age = _a.age;
                return totalAges += age;
            });
            console_1.console.stream('total-ages')
                .log(totalAges);
            totalAges = 0;
            whatAboutBob = family.concat([
                { name: 'Bob' }
            ]);
            whatAboutBob.forEach(function (_a) {
                var age = _a.age;
                return totalAges += age;
            });
            console_1.console.stream('total-ages-unsafe')
                .log(totalAges);
            totalAges = 0;
            whatAboutBob.forEach(function (_a) {
                var _b = _a.age, age = _b === void 0 ? 0 : _b;
                return totalAges += age;
            });
            console_1.console.stream('total-ages-safe')
                .log(totalAges);
            defaults = {
                easing: 'easeInQuad',
                duration: 500,
                complete: function () { }
            };
            slow = __assign({}, defaults, { duration: 10000 });
            console_1.console.stream('defaults')
                .log(slow.duration)
                .log(slow.easing)
                .log(slow.complete);
            cloned = __assign({}, josh);
            cloned.age = 25;
            console_1.console.stream('cloned')
                .log("josh.age = " + josh.age)
                .log("cloned.age = " + cloned.age);
        }
    };
});
//# sourceMappingURL=object-destructuring.js.map