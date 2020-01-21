const name = "윤성민",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};

sayHi(name, age, gender);
sayHi(name, age);
export {};
