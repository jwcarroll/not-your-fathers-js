import { console } from "console";

const person = {
  name: "Josh",
  age: 38
};

function myTag(strings, ...rest) {
  return { strings, rest };
}

console.log(
  myTag`Hello World`
);

console.stream("params").log(
  myTag`Hi ${person.name}`
);

function socialDistancing(strings, ...rest) {
  return strings.join(" <----> ");
}

console.stream("distance").log(
  socialDistancing`Josh ${''} Patty`
);


