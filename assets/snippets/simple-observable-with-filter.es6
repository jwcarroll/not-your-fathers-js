import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

const keyPresses$ =
  Observable.fromEvent(document, 'keypress');

keyPresses$
  .map(e => e.key)
  .let(log())
  .filter(key => _.some("aeiou", l => l == key))
  .subscribe(key => {
    console.stream('filter').log(key);
  });