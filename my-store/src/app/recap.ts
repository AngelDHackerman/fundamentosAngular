const userName: string = 'Angel';

const sum = (a: number, b: number):number => {
  return a + b;
}
console.log(sum(1,2));


class Person {
  constructor (public age: number, public lastName: string) {

  }
}

const Angel = new Person(26, 'Hernandez');
console.log(Angel);

Angel.age;
