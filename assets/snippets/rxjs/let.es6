import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';

const nums$ = Observable.interval(100);

nums$
  .filter(val => val % 5 === 0)
  .map(val => val * val);

function modFiveSquared(obs) {
  return obs
    .filter(val => val % 5 === 0)
    .map(val => val * val);
}

const sub = nums$
  .let(modFiveSquared)
  .subscribe(val => {
    console.log(val);
  });

setTimeout(() => {
  sub.unsubscribe();
}, 10000);