import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/let';

const nums$ = Observable.interval(100);

nums$.let(log())
  .skip(20)
  .take(10)
  .subscribe(val => {
    console.stream('skip, take').log(val);
  },
  err => {},
  () => {
    console.log("Finished!")
  });