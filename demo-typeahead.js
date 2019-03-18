import React from "react";
import { render } from "react-dom";

import { fromEvent, forkJoin } from "rxjs";
import {
  map,
  filter,
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  delay
} from "rxjs/operators";

import starWarsService from "./assets/services/starWarsService";
import SearchResults from "./demos/typeahead";

const input = document.getElementById("tbSearch");

const searches$ = fromEvent(input, "keyup").pipe(
  map(e => e.target.value),
  filter(search => search.length >= 2),
  debounceTime(500),
  distinctUntilChanged()
);

searches$
  .pipe(
    tap(() => {
      renderResults([], true);
    }),
    switchMap(search =>
      forkJoin(
        starWarsService.findCharacters(search),
        starWarsService.findVehicles(search),
        starWarsService.findStarships(search)
      )
    ),
    delay(2000)
  )
  .subscribe(([characters, vehicles, starships]) => {
    renderResults({ characters, vehicles, starships });
  });

function renderResults(results, searching = false) {
  const searchResults = <SearchResults {...results} searching={searching} />;
  render(searchResults, document.getElementById("search-results"));
}
