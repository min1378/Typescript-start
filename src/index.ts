interface Human {
  name: string;
  age: number;
  gender: string;
}
const Person = {
  name: "윤성민",
  age: 24,
  gender: "male"
};
const sayHi = (Person: Human): void => {
  console.log(
    `Hello ${Person.name}, you are ${Person.age}, you are ${Person.gender}`
  );
};

sayHi(Person);

export {};
