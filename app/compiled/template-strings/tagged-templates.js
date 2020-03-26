System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    var console_1, person, templateObject_1, templateObject_2, templateObject_3;
    var __moduleName = context_1 && context_1.id;
    function myTag(strings) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return { strings: strings, rest: rest };
    }
    function socialDistancing(strings) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return strings.join(" <----> ");
    }
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
            console_1.console.log(myTag(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Hello World"], ["Hello World"]))));
            console_1.console.stream("params").log(myTag(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Hi ", ""], ["Hi ", ""])), person.name));
            console_1.console.stream("distance").log(socialDistancing(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Josh ", " Patty"], ["Josh ", " Patty"])), ''));
        }
    };
});
//# sourceMappingURL=tagged-templates.js.map