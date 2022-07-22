System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var console_1, dislikes, joshLikes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            dislikes = {
                pickles: true,
                mayo: true,
                mustard: true
            };
            joshLikes = new Proxy(dislikes, {
                get: function (target, property, receiver) {
                    return target[property] ? 'no' : 'yes';
                }
            });
            console_1.console.log('Does Josh Like:');
            console_1.console.log("pickles: ".concat(joshLikes.pickles));
            console_1.console.log("cats: ".concat(joshLikes.cats));
            console_1.console.log("mustard: ".concat(joshLikes.mustard));
            console_1.console.log("kids: ".concat(joshLikes.kids));
            console_1.console.log("long walks on the beach: ".concat(joshLikes.longWalksOnTheBeach));
        }
    };
});
//# sourceMappingURL=simple-get-handler.js.map