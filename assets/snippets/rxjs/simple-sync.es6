import { Observable } from 'rxjs/Observable';

const myObservable$ =
  new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

myObservable$.subscribe(val => console.log(val));