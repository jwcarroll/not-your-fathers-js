import { console } from "console";

function printName(obj) {
  const msg = `Hello ${obj.name.first}`;
  console.log(msg);
}

printName({ name: { first: "Josh" } });
printName({ name: {} });
printName({});
printName(undefined);





