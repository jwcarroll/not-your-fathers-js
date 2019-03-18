import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import starWarsService from '../../services/starWarsService';

const keypresses$ = Observable
  .fromEvent(document, 'keypress')
  .map(e => e.key);

keypresses$
  .let(log())
  .map(v => parseInt(v))
  .filter(v => !isNaN(v))
  .switchMap(id => starWarsService.getEpisode(id))
  .subscribe(mov => {
    const title = (mov && mov.title) ||
      "[Not Found]";

    console.stream('Films').log(title);
  });