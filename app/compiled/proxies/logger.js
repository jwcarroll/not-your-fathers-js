System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, josh;
    var __moduleName = context_1 && context_1.id;
    function logMethodCalls(obj) {
        for (var propName in obj) {
            if (!obj.hasOwnProperty(propName))
                continue;
            var func = obj[propName];
            if (typeof func === "function") {
                obj[propName] = createLoggedMethod(func);
            }
        }
        return obj;
    }
    function createLoggedMethod(func) {
        return new Proxy(func, {
            apply: function (target, thisArg, argumentList) {
                console_1.console.log("[TRACE]: " + target.name + ": " + argumentList);
                return target.apply(thisArg, argumentList);
            }
        });
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            josh = {
                name: 'Josh',
                age: 38,
                greet: function (greeting) {
                    console_1.console.log(this.name + " says " + greeting);
                }
            };
            logMethodCalls(josh);
            josh.greet("Hello");
        }
    };
});
//# sourceMappingURL=logger.js.map