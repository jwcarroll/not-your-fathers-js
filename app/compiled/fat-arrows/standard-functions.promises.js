System.register(["fake-promises"], function (exports_1, context_1) {
    "use strict";
    var svc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (svc_1) {
                svc = svc_1;
            }
        ],
        execute: function () {
            svc.thisProjectWillBeEasy()
                .then(function (val) {
                return svc.itWillBeDoneOnTime();
            })
                .then(function (val) {
                return svc.itWillBeAwesome();
            })
                .then(function (val) {
                console.log(val);
            });
        }
    };
});
//# sourceMappingURL=standard-functions.promises.js.map