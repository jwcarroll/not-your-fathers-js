import { console } from "console";

function printName(obj, stream = "default") {
  const name = obj?.name?.first ?? "friend";
  const msg = `Hello ${name}`;
  console.stream(stream)
    .log(msg);
}

printName({ name: { first: "Josh" } });
printName({ name: {} });


printName({ name: { first: "" } }, "falsy");
printName({ name: { first: 0 } }, "falsy");
printName({ name: { first: false } }, "falsy");





