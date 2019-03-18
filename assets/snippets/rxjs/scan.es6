import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/let';

const nums$ = 
  Observable.interval(100)
  .take(30);

nums$
  .scan(
    (acc, val) => ({
      left: acc.sum,
      right: val,
      sum: acc.sum + val
    }),
    {left:0, right:0, sum:0}
  )
  .subscribe(val => {
    console.log(
      `${val.left} + ${val.right} = ${val.sum}`
    );
  });