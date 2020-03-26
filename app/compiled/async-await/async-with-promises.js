System.register(["console", "./fake-service.js"], function (exports_1, context_1) {
    "use strict";
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var console_1, fake_service_js_1, svc;
    var __moduleName = context_1 && context_1.id;
    function computeProductAsync() {
        var p1 = svc.getValue();
        var p2 = svc.getValue();
        return Promise.all([p1, p2])
            .then(function (_a) {
            var _b = __read(_a, 2), a = _b[0], b = _b[1];
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