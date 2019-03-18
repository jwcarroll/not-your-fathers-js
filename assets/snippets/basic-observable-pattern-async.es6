const Observable = (observer) => {
    let val = 0;

    const id = setInterval(() => {
        observer.next(val++);
    }, 500);
    
    return () => {
        console.log("Cleaning up resources...");
        clearInterval(id);
    };
};

const unsubscribe = Observable({
    next:val => console.log(val)
});

setTimeout(() => {
    console.log("Unsubscribing...");
    unsubscribe();
}, 5000);