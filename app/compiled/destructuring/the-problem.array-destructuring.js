System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, family, husband, wife, kids;
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
            husband = family[0];
            wife = family[1];
            kids = [];
            for (var i = 2; i < family.length; i++) {
                kids.push(family[i]);
            }
            console_1.console.log(husband);
            console_1.console.log(wife);
            console_1.console.log(kids);
        }
    };
});
//# sourceMappingURL=the-problem.array-destructuring.js.map