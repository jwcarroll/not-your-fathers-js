import { Observable } from 'rxjs/Observable';

const keyPresses$ = 
  Observable.fromEvent(document, 'keypress');

keyPresses$.subscribe(e => {
  console.log(e.key);
});