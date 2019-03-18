import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

const nums$ = Observable.interval(100);

const sub = nums$
  .do(val => console.log(val))
  .filter(val => val % 5 === 0)
  .do(val => console.stream('filter').log(val))
  .map(val => val * val)
  .subscribe(val => {
    console.stream('mapped').log(val);
  });

setTimeout(() => {
  sub.unsubscribe();
}, 10000);