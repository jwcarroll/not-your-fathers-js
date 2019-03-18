import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import starWarsService from '../../services/starWarsService';

const episodes$ = 
  Observable.interval(500)
  .skip(1).take(7);

episodes$
  .let(log())
  .let(onlyTheGoodOnes)
  .let(log('Filtered'))
  .switchMap(id => starWarsService.getEpisode(id))
  .mergeMap(mov => Observable.from(mov.planets))
  .mergeMap(id => starWarsService.getPlanet(id))
  .subscribe(planet => {
    console.stream('Planets').log(planet.name);
  });

function onlyTheGoodOnes(obs){
  return obs.filter(
    v => _.some([4,5,6], id => id === v));
}