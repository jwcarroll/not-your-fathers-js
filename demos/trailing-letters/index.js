import { fromEvent, from, of } from "rxjs";
import { mergeMap, delay } from "rxjs/operators";

const letters = createLetters("Thank You, Connect.Tech 2018!");
const spacing = 40;
const animationLength = 1000;

fromEvent(document, "mousemove")
  .pipe(
    mergeMap(({ clientX, clientY }) =>
      from(letters).pipe(
        mergeMap((el, i) => {
          const left = clientX + i * spacing + 15;
          const top = clientY;

          return of({ el, top, left }).pipe(
            delay(i * (animationLength / letters.length))
          );
        })
      )
    )
  )
  .subscribe(({ el, left, top }) => {
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
  });

function createLetters(word) {
  const target = document.getElementById("letters");

  return word.split("").map(c => {
    const el = document.createElement("span");
    el.innerText = c;

    target.appendChild(el);

    return el;
  });
}
