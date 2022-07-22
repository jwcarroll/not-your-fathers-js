System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, person, soCool;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            person = {
                name: "Josh",
                age: 41
            };
            soCool = [
                person.name,
                " is ",
                person.age,
                " years old"
            ].join("");
            console_1.console.log(soCool);
        }
    };
});
//# sourceMappingURL=string-concat-hipster.js.map