import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import "rxjs/add/observable/fromPromise";

const api = 'http://swapi.co/api';

export class ProductionStarWarsService {
  getEpisode(episodeNumber) {
    const request = fetch(`${api}/films/`)
      .then(res => {
        return res.json();
      })
      .then(getResults)
      .then(films => {
        return _.find(films, { episode_id: episodeNumber })
      });

    return Observable.fromPromise(request);
  }

  getCharacter(id) {
    const request = fetch(`${api}/people/${cleanId(id)}`)
      .then(res => {
        return res.json();
      });

    return Observable.fromPromise(request);
  }

  getAllCharacters() {
    const request = fetch(`${api}/people/`)
      .then(res => {
        return res.json();
      });

    return Observable.fromPromise(request);
  }

  findCharacters(searchTerm) {
    const request = fetch(`${api}/people/?search=${searchTerm}`)
      .then(res => {
        return res.json();
      })
      .then(getResults);

    return Observable.fromPromise(request);
  }

  findVehicles(searchTerm) {
    const request = fetch(`${api}/vehicles/?search=${searchTerm}`)
      .then(res => {
        return res.json();
      })
      .then(getResults);

    return Observable.fromPromise(request);
  }

  findStarships(searchTerm) {
    const request = fetch(`${api}/starships/?search=${searchTerm}`)
      .then(res => {
        return res.json();
      })
      .then(getResults);

    return Observable.fromPromise(request);
  }

  getPlanet(id) {
    const request = fetch(`${api}/planets/${cleanId(id)}`)
      .then(res => {
        return res.json();
      });

    return Observable.fromPromise(request);
  }
}

function getResults(paged) {
  return paged && paged.results;
}

function cleanId(id){
  return (id || '').replace(/[^0-9]*/g, '');
}
