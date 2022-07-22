System.register(["console"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var console_1, Person, josh;
    var __moduleName = context_1 && context_1.id;
    function decorated(constructor) {
        constructor.prototype["__decorated"] = true;
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            Person = /** @class */ (function () {
                function Person(name, age) {
                    this.name = name;
                    this.age = age;
                }
                Person = __decorate([
                    decorated,
                    __metadata("design:paramtypes", [String, Number])
                ], Person);
                return Person;
            }());
            josh = new Person("Josh", 41);
            console_1.console.log(josh);
            console_1.console.log("josh[__decorated] = ".concat(josh["__decorated"]));
        }
    };
});
//# sourceMappingURL=simple-class-decorator.js.map