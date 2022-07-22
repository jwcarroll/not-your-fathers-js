import { console } from "console";

interface Greeter {
  greet(): void;
}

const greeter: Greeter = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

@Mixin(greeter)
class Person implements Greeter {
  constructor(
    public name,
    public age
  ) { }

  greet: () => void;
}

const josh = new Person("Josh", 41);

josh.greet();



function Mixin(mixinType) {
  return function (constructor: Function) {
    for (let prop in mixinType) {
      constructor.prototype[prop]
        = mixinType[prop];
    }
  };
}




