const doStuff = (callback) => {
    setTimeout(() => callback(1), 1000);
    setTimeout(() => callback(2), 2000);
    setTimeout(() => callback(3), 3000);
};

doStuff(val => console.log(`sub1: ${val}`));

setTimeout(() => {
    doStuff(val => {
        console.stream('sub2').log(`sub2: ${val}`)
    });
}, 2000);