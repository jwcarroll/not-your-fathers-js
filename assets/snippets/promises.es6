//No more callback hell!
doStuffAsync()
.then(val => anotherAsyncCall(val))
.then(val => oneMoreAsyncCall(val))
.then(val => whatIsThisForAsync(val))
.then(val => notSoSadAnymore(val))
.then(val => {
  doStuff(val);
});