// Bai.ts

// Bài 1:Create a class Person with attributes name and age. Write a method to display this information.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
  }
}

const p = new Person("Tung", 24);
p.showInfo();

// Bài 2:Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAll(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
  }
}

const s = new Student("Minh", 20, "12A1");
s.displayAll();

// Bài 3: Create a class Car with properties brand, model, year. Write a method to show car info
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`Xe: ${this.brand} ${this.model}, Năm: ${this.year}`);
  }
}

const car = new Car("Toyota", "Corolla", 2020);
car.showInfo();

// Bài 4: Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());

// Bài 5: Create a class BankAccount with balance. Add methods deposit() and withdraw()
class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Nạp ${amount}, Số dư: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Rút ${amount}, Số dư: ${this.balance}`);
    } else {
      console.log("Không đủ số dư để rút!");
    }
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(2000);

// ===== Bài 6: Create a class Book with attributes title, author, year. =====
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  showInfo(): void {
    console.log(
      `Sách: ${this.title}, Tác giả: ${this.author}, Năm: ${this.year}`
    );
  }
}

const book = new Book("Lập trình TypeScript", "Nguyen Tung", 2024);
book.showInfo();

// ===== Bài 7: Write a class User with private property name and getter/setter. =====
class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  set Name(newName: string) {
    this.name = newName;
  }
}

const u = new User("Tung");
console.log(`Tên: ${u.Name}`);
u.Name = "Minh";
console.log(`Tên mới: ${u.Name}`);

// ===== Bài 8: Create a Product class with name, price. Create an array of products and filter products with price > 100. =====
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Sách", 50),
  new Product("Điện thoại", 500),
  new Product("Laptop", 1200),
  new Product("Bút", 20),
];

const expensive = products.filter((p) => p.price > 100);
console.log("Các sản phẩm có giá > 100:");
expensive.forEach((p) => console.log(`Tên: ${p.name}, Giá: ${p.price}`));

// ===== Bài 9: Define an interface Animal with name and method sound(). =====
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name} kêu: Meo meo!`);
  }
}

const d = new Dog("Cún");
d.sound();
const c = new Cat("Miu");
c.sound();

// ===== Bài 10: Create a class Account with public, private and readonly fields. =====
class Account {
  public accountNumber: string;
  private balance: number;
  readonly owner: string;

  constructor(accountNumber: string, owner: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

const acc1 = new Account("123456", "Nguyen Tung", 1000);
acc.deposit(500);
console.log(
  `Chủ TK: ${acc1.owner}, Số TK: ${
    acc1.accountNumber
  }, Số dư: ${acc1.getBalance()}`
);

class Animal11 {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} phát ra âm thanh...`);
  }
}

class Dog11 extends Animal11 {
  makeSound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

class Cat11 extends Animal11 {
  makeSound(): void {
    console.log(`${this.name} kêu: Meo meo!`);
  }
}

// ---- Demo ----
const dog11 = new Dog11("Cún");
dog11.makeSound();

const cat11 = new Cat11("Miu");
cat11.makeSound();

// ===== 12. Interfaces Flyable, Swimmable -> Bird, Fish =====
interface Flyable {
  fly(): void;
}
interface Swimmable {
  swim(): void;
}
class Bird implements Flyable {
  constructor(public name: string) {}
  fly(): void {
    console.log(`${this.name} đang bay!`);
  }
}
class Fish implements Swimmable {
  constructor(public name: string) {}
  swim(): void {
    console.log(`${this.name} đang bơi!`);
  }
}
new Bird("Sẻ").fly();
new Fish("Cá chép").swim();

// ===== 13. Abstract Shape -> Square, Circle =====
abstract class Shape {
  abstract area(): number;
}
class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
console.log("Square area:", new Square(4).area());
console.log("Circle area:", new Circle(3).area().toFixed(2));

// ===== 14. Employee -> Manager, Developer =====
class Employee {
  constructor(public name: string, public salary: number) {}
}
class Manager extends Employee {
  conductMeeting(): void {
    console.log(`${this.name} đang họp nhóm.`);
  }
}
class Developer extends Employee {
  code(): void {
    console.log(`${this.name} đang viết code.`);
  }
}
new Manager("Lan", 3000).conductMeeting();
new Developer("Tùng", 2500).code();

// ===== 15. Library: store Book & User, add books =====
class Book15 {
  constructor(public title: string, public author: string) {}
}
class User15 {
  constructor(public name: string) {}
}
class Library {
  private books: Book15[] = [];
  private users: User15[] = [];
  addBook(book: Book15): void {
    this.books.push(book);
    console.log(`Đã thêm sách: ${book.title}`);
  }
  addUser(user: User15): void {
    this.users.push(user);
    console.log(`Đã thêm user: ${user.name}`);
  }
  listBooks(): void {
    console.log("Danh sách sách:", this.books.map((b) => b.title).join(", "));
  }
}
const lib = new Library();
lib.addUser(new User15("Minh"));
lib.addBook(new Book15("Clean Code", "Robert C. Martin"));
lib.addBook(new Book15("TypeScript Handbook", "TS Team"));
lib.listBooks();

// ===== 16. Generic class Box =====
class Box16<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
  setValue(value: T): void {
    this.value = value;
  }
}

console.log("Bài 16:");
const numberBox = new Box16<number>(123);
console.log("Number:", numberBox.getValue());
const stringBox = new Box16<string>("Hello");
console.log("String:", stringBox.getValue());

// ===== 17. Singleton Logger =====
class Logger17 {
  private static instance: Logger17;
  private constructor() {}
  static getInstance(): Logger17 {
    if (!Logger17.instance) {
      Logger17.instance = new Logger17();
    }
    return Logger17.instance;
  }
  log(message: string): void {
    console.log("[LOG]:", message);
  }
}

console.log("\nBài 17:");
const loggerA = Logger17.getInstance();
const loggerB = Logger17.getInstance();
loggerA.log("Ứng dụng khởi động");
console.log("loggerA === loggerB ?", loggerA === loggerB); // true

// ===== 18. Static MathUtil =====
class MathUtil18 {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("Không chia được cho 0");
    return a / b;
  }
}

console.log("\nBài 18:");
console.log("Add:", MathUtil18.add(5, 3));
console.log("Subtract:", MathUtil18.subtract(5, 3));
console.log("Multiply:", MathUtil18.multiply(5, 3));
console.log("Divide:", MathUtil18.divide(6, 2));

// ===== 19. Polymorphism (method overriding) =====
class Animal19 {
  constructor(public name: string) {}
  makeSound(): void {
    console.log(`${this.name} phát ra âm thanh...`);
  }
}
class Dog19 extends Animal19 {
  makeSound(): void {
    console.log(`${this.name} sủa gâu gâu`);
  }
}
class Cat19 extends Animal19 {
  makeSound(): void {
    console.log(`${this.name} kêu meo meo`);
  }
}

console.log("\nBài 19:");
const animals: Animal19[] = [new Dog19("Cún"), new Cat19("Miu")];
animals.forEach((a) => a.makeSound());

// ===== 20. Vehicle interface, Car & Bike =====
interface Vehicle20 {
  drive(): void;
}

class Car20 implements Vehicle20 {
  drive(): void {
    console.log("Xe hơi đang chạy...");
  }
}
class Bike20 implements Vehicle20 {
  drive(): void {
    console.log("Xe máy đang chạy...");
  }
}

console.log("\nBài 20:");
const car20 = new Car20();
const bike20 = new Bike20();
car20.drive();
bike20.drive();

// ===== 21. Generic Repository (add, getAll) =====
class Repository21<T> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  getAll(): T[] {
    return [...this.items];
  }
}
console.log("Bài 21:");
const repo21 = new Repository21<string>();
repo21.add("Item A");
repo21.add("Item B");
console.log(repo21.getAll());

// ===== 22. Stack with push, pop, peek, isEmpty =====
class Stack22<T> {
  private data: T[] = [];
  push(item: T): void {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
}
console.log("\nBài 22:");
const stack22 = new Stack22<number>();
console.log(stack22.isEmpty());
stack22.push(10);
stack22.push(20);
console.log(stack22.peek());
console.log(stack22.pop());
console.log(stack22.isEmpty());

// ===== 23. Payment interface, CashPayment & CardPayment =====
interface Payment23 {
  pay(amount: number): void;
}
class CashPayment23 implements Payment23 {
  pay(amount: number): void {
    console.log(`Thanh toán tiền mặt: ${amount}`);
  }
}
class CardPayment23 implements Payment23 {
  constructor(private cardNumber: string) {}
  pay(amount: number): void {
    console.log(`Thanh toán thẻ ${this.cardNumber}: ${amount}`);
  }
}
console.log("\nBài 23:");
const cash23 = new CashPayment23();
const card23 = new CardPayment23("**** **** **** 1234");
cash23.pay(150);
card23.pay(299);

// ===== 24. Abstract Appliance -> Fan, AirConditioner =====
abstract class Appliance24 {
  abstract turnOn(): void;
}
class Fan24 extends Appliance24 {
  turnOn(): void {
    console.log("Quạt bật: vù vù...");
  }
}
class AirConditioner24 extends Appliance24 {
  turnOn(): void {
    console.log("Điều hòa bật: mát lạnh...");
  }
}
console.log("\nBài 24:");
new Fan24().turnOn();
new AirConditioner24().turnOn();

// ===== 25. Shape with static describe() =====
class Shape25 {
  static describe(): void {
    console.log("Shape là hình học cơ bản có diện tích & chu vi.");
  }
}
console.log("\nBài 25:");
Shape25.describe();

// ===== 26. Order with list of products, total price =====
class Product26 {
  constructor(public name: string, public price: number) {}
}
class Order26 {
  private products: Product26[] = [];
  addProduct(p: Product26): void {
    this.products.push(p);
  }
  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
console.log("Bài 26:");
const order26 = new Order26();
order26.addProduct(new Product26("Bánh", 20));
order26.addProduct(new Product26("Sữa", 30));
console.log("Tổng giá:", order26.getTotal());

// ===== 27. Teacher extends Person =====
class Person27 {
  constructor(public name: string, public age: number) {}
}
class Teacher27 extends Person27 {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  introduce(): void {
    console.log(
      `Tôi là ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}.`
    );
  }
}
console.log("\nBài 27:");
const t27 = new Teacher27("Lan", 35, "Toán");
t27.introduce();

// ===== 28. Animal with protected makeSound(), Dog & Cat override =====
class Animal28 {
  constructor(public name: string) {}
  protected makeSound(): void {
    console.log(`${this.name} phát ra âm thanh...`);
  }
  public playSound(): void {
    this.makeSound();
  }
}
class Dog28 extends Animal28 {
  protected makeSound(): void {
    console.log(`${this.name} sủa gâu gâu!`);
  }
}
class Cat28 extends Animal28 {
  protected makeSound(): void {
    console.log(`${this.name} kêu meo meo!`);
  }
}
console.log("\nBài 28:");
new Dog28("Cún").playSound();
new Cat28("Miu").playSound();

// ===== 29. Movable interface, Car & Robot =====
interface Movable29 {
  move(): void;
}
class Car29 implements Movable29 {
  move(): void {
    console.log("Xe hơi di chuyển trên đường.");
  }
}
class Robot29 implements Movable29 {
  move(): void {
    console.log("Robot đang bước đi.");
  }
}
console.log("\nBài 29:");
new Car29().move();
new Robot29().move();

// ===== 30. School with Students & Teachers =====
class Student30 {
  constructor(public name: string, public grade: string) {}
}
class Teacher30 {
  constructor(public name: string, public subject: string) {}
}
class School30 {
  private students: Student30[] = [];
  private teachers: Teacher30[] = [];
  addStudent(s: Student30): void {
    this.students.push(s);
  }
  addTeacher(t: Teacher30): void {
    this.teachers.push(t);
  }
  displayInfo(): void {
    console.log("Danh sách học sinh:");
    this.students.forEach((s) => console.log(`- ${s.name}, lớp ${s.grade}`));
    console.log("Danh sách giáo viên:");
    this.teachers.forEach((t) => console.log(`- ${t.name}, môn ${t.subject}`));
  }
}
console.log("\nBài 30:");
const school30 = new School30();
school30.addStudent(new Student30("Minh", "12A1"));
school30.addStudent(new Student30("Hoa", "11B"));
school30.addTeacher(new Teacher30("Thầy Tùng", "Vật lý"));
school30.addTeacher(new Teacher30("Cô Lan", "Ngữ văn"));
school30.displayInfo();
