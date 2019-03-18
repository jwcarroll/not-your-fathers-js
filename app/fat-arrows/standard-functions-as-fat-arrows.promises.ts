import * as svc from "fake-promises";

svc.thisProjectWillBeEasy()
  .then(val => svc.itWillBeDoneOnTime())
  .then(val => svc.itWillBeAwesome())
  .then(val => {
    console.log(val);
  });
