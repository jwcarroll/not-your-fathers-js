const Observable = (observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    //void unsubscribe function
    return () => {};
};

Observable({
    next:val => console.log(val)
});