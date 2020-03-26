import { console } from "console";

function Person(name) {
  this.name = name;
}
Person.prototype = {
  sayHello: function () {
    console.log(`My name is ${this.name}`);
  },
  sayHelloLater: function(){
    setTimeout(() => {
      this.sayHello();
    });
  }
};

const josh = new Person('Josh');

josh.sayHello();
josh.sayHelloLater();
