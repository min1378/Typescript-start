class Human {
  public name: string; // js에선 public, private 신경쓰지 않는다.
  public age: number;
  public gender: string;
  constructor(
    name: string,
    age: number,
    gender: string //constructor는 클래스가 시작할 때 호출됨.
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const lynn = new Human("Lynn", 18, "female");
const sayHi = (Person: Human): void => {
  console.log(
    `Hello ${Person.name}, you are ${Person.age}, you are ${Person.gender}`
  );
};

sayHi(lynn);

export {};
