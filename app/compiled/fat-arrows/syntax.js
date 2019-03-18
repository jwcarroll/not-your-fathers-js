System.register([], function (exports_1, context_1) {
    "use strict";
    var noParams, single, singleTyped, multiple, returnVal, sameAsAbove, returnObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            noParams = function () { };
            single = function (msg) { };
            singleTyped = function (msg) { };
            multiple = function (a, b) { };
            returnVal = function () { return 'hello'; };
            sameAsAbove = function () {
                return 'hello';
            };
            returnObject = function () { return ({
                name: 'Josh'
            }); };
        }
    };
});
//# sourceMappingURL=syntax.js.map