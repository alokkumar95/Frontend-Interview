import arr from "./example2.js";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function getPersonInfo(p: Person) {
  return p;
}

console.log(getPersonInfo({ firstName: "Alok", lastName: "Kumar", age: 27 }),arr);
