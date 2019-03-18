import { console } from "console";


class SelfDestructButton {

  @Confirm("Dude... Are you sure?")
  async doIt() {
    console.log("Self destruct in...");

    await this.countdown(10);

    console.log("Kaboom!!!");
  }

  countdown(seconds) {
    return new Promise(res => {
      let n = seconds;

      const id = setInterval(() => {
        console.log(n);
        n -= 1;

        if (n <= 0) {
          clearInterval(id);
          res();
        }
      }, 500);
    });
  }
}

const btn = new SelfDestructButton();

btn.doIt();




function Confirm(msg: string = "Are you sure?") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

      const result = window.confirm(msg);

      if (result) {
        return originalMethod.apply(target, args);
      }

      console.log("Cancelled.");
    };
  };
}




