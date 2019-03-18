const Observable = (observer) => {
    for(let i = 0; i < 10; i++){
        observer.next(i);
    }

    return () => {};
};

const Filter = (observable, predicate) => {
    return (observer) => {
        const filterObserver = {
            next: val => {
                if(predicate(val)){
                    observer.next(val);
                }
            }
        };

        return observable(filterObserver);
    };
};

const EvenNumbers = Filter(Observable, val => {
    console.log(val);

    return val % 2 === 0;
});

const EvenNumbersGreaterThanFive = 
    Filter(EvenNumbers, val => {
        console.stream('even').log(val);

        return val > 5;
    });

EvenNumbersGreaterThanFive({
    next: val => console.stream('> 5').log(val)
});