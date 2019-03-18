import { console } from "console";

function Person(name: string) {
  this.name = name;
}
Person.prototype = {
  sayHello: function () {
    console.log(`My name is ${this.name}`);
  },
  sayHelloLater: function(){
    setTimeout(function(){
      this.sayHello();
    }.bind(this));
  }
};

const josh = new Person('Josh');

josh.sayHello();
josh.sayHelloLater();
