System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, josh;
    var __moduleName = context_1 && context_1.id;
    function Person(name) {
        this.name = name;
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            Person.prototype = {
                sayHello: function () {
                    console_1.console.log("My name is " + this.name);
                },
                sayHelloLater: function () {
                    setTimeout(function () {
                        this.sayHello();
                    }.bind(this));
                }
            };
            josh = new Person('Josh');
            josh.sayHello();
            josh.sayHelloLater();
        }
    };
});
//# sourceMappingURL=the-problem.fixed-with-bind.js.map