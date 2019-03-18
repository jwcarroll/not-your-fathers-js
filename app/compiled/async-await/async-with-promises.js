System.register(["console", "./fake-service.js"], function (exports_1, context_1) {
    "use strict";
    var console_1, fake_service_js_1, svc;
    var __moduleName = context_1 && context_1.id;
    function computeProductAsync() {
        var p1 = svc.getValue();
        var p2 = svc.getValue();
        return Promise.all([p1, p2])
            .then(function (_a) {
            var a = _a[0], b = _a[1];
            console_1.console.log(a + " * " + b + " = [calculating...]");
            return svc.multiply(a, b);
        })
            .then(function (product) {
            console_1.console.log(product);
        });
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            },
            function (fake_service_js_1_1) {
                fake_service_js_1 = fake_service_js_1_1;
            }
        ],
        execute: function () {
            svc = new fake_service_js_1.FakeService();
            console_1.console.log('Fetching values...');
            computeProductAsync()
                .then(function () {
                console_1.console.log('[finished]');
            });
        }
    };
});
//# sourceMappingURL=async-with-promises.js.map