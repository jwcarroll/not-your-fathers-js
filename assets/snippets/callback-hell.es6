doStuffAsync(val => {
  //Not so bad
  anotherAsyncCall(val, newVal => {
    //One more can't hurt
    oneMoreAsyncCall(val, newVal, foo => {
      //I need a shower
      whatIsThisForAsync(val, foo, bar => {
        //Kill me now
        asyncMakesMeSad(newVal, bar, lastVal => {

          doStuff(val, bar);
          
          andMore(foo, lastVal);
        });
      });
    });
  });
});