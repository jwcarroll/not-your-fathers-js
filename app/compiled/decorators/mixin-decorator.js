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
    var console_1, greeter, Person, josh;
    var __moduleName = context_1 && context_1.id;
    function Mixin(mixinType) {
        return function (constructor) {
            for (var prop in mixinType) {
                constructor.prototype[prop]
                    = mixinType[prop];
            }
        };
    }
    return {
        setters: [
            function (console_1_1) {
                console_1 = console_1_1;
            }
        ],
        execute: function () {
            greeter = {
                greet: function () {
                    console_1.console.log("Hello, my name is " + this.name);
                }
            };
            Person = /** @class */ (function () {
                function Person(name, age) {
                    this.name = name;
                    this.age = age;
                }
                Person = __decorate([
                    Mixin(greeter),
                    __metadata("design:paramtypes", [Object, Object])
                ], Person);
                return Person;
            }());
            josh = new Person("Josh", 38);
            josh.greet();
        }
    };
});
//# sourceMappingURL=mixin-decorator.js.map