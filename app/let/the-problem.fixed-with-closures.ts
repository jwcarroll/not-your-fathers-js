import { console } from "console";

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}
