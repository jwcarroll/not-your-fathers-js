System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, josh, joshProxy;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            josh = {
                name: 'Josh',
                age: 41
            };
            joshProxy = new Proxy(josh, {
                set: function (target, property, value, receiver) {
                    if (target[property] !== value) {
                        console_1.console.log("[".concat(String(property), "]: ").concat(target[property], " => ").concat(value));
                    }
                    target[property] = value;
                    return true;
                }
            });
            joshProxy.name = "Big Money";
            joshProxy.age = 45;
        }
    };
});
//# sourceMappingURL=change-detection.js.map