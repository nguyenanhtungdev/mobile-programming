class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  show(): void {
    console.log(`Tên tôi là ${this.name}, ${this.age} tuổi`);
  }
}

const p = new Person("Nguyen Tung", 24);
p.show();
