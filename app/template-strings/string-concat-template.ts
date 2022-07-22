import { console } from "console";

const person = {
  name: "Josh",
  age: 41
};

const msg = `${person.name} is ${person.age} years old`;

const msg2 = `
person: ${person.name}
age: ${person.age}
old?: ${person.age > 35 ? "🤭" : "🥰"}
`;

console.log(msg);
console.log(msg2);



