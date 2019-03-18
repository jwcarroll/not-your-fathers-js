System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, person, msg, msg2;
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
                age: 38
            };
            msg = person.name + " is " + person.age + " years old";
            msg2 = "\nperson: " + person.name + "\nage: " + person.age + "\n";
            console_1.console.log(msg);
            console_1.console.log(msg2);
        }
    };
});
//# sourceMappingURL=string-concat-template.js.map