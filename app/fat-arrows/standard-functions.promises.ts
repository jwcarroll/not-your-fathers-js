import * as svc from "fake-promises";

svc.thisProjectWillBeEasy()
  .then(function (val) {
    return svc.itWillBeDoneOnTime();
  })
  .then(function (val) {
    return svc.itWillBeAwesome();
  })
  .then(function (val) {
    console.log(val);
  });
