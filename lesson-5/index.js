// class HumanWorker extends Human {
//   // getting more parameters, saving salary, and just passing the rest to parent constructor
//   constructor(name, favoriteFood, hoursOfSleep, salary) {
//       // "super" is a reference to your parant class like "this"
//     super(name, favoriteFood, hoursOfSleep); // This is IMPORTANT!! We are call the constactor of our paren class
//     // the rule is in case when you need to create your constractor and call constructor of your parent class call super at the first place
//     // you should call parent constructor before trying to access 'this'
//     // Otherwise error: `this is not defined` will happen
//     this.salary = salary;
//   }

//   work() {
//     console.log(`${this.name} is working and will get ${this.salary}$`);
//   }
// }
// // 'super' is simular to 'this', but refers to parent class
// // Use super to access parent properties, methods and even constructor
// let worker1 = new HumanWorker("Homer", "Donuts", 12, 2000);
// worker1.work(); // Homer is working

// this.test = 'TEEEST'
// const obj = {
//   name: 'name111',
//   test: 'test',
//   myFunc ()  {
//     console.log(this);
//     const innerFunc1 = function(){
//       return this;
//     }

//     const innerFunc2 = () => this;

//     console.log(innerFunc1());
//     console.log(innerFunc2());
//   }
// }
// obj.myFunc()

// this.b = 'aaa';
// console.log(this);
// const a = {
//   b: 's',
//   func() {
//     console.log(this.b);
//   }
// }
// a.func()

// function Human(name, favoriteFood, hoursOfSleep) {
//   console.log('THIS', this); 
//   this.legs = 2;
//   this.hands = 2;
//   this.head = 1;
//   this.name = name;
//   this.favoriteFood = favoriteFood;
//   this.hoursOfSleep = hoursOfSleep;
//   this.walk = function() {
//     console.log(`${this.name} is walking`);
//   };
//   this.eat = function() {
//     console.log(`${this.name} is eating ${this.favoriteFood}`);
//   };
//   this.sleep = function() {
//     console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
//   };
//   this.logThis = function() {
//     console.log(`Got this: ${this}`);
//     console.log(`Got this: ${Object.keys(this)}`);
//     console.log(`Got this: ${Object.values(this)}`);
//   };
// }
// // new Human() syntax will automatically create object for us and return 'this'
// // new key means run your function and return done object
// let human1 = new Human("Mykola", "Borcht", null);
// let human2 = new Human("Bob", "Pasta", 7);
// let human3 = new Human("John", "Fruits", 4);

// // Still works the same:
// human1.logThis(); 
//  // Mykols went sleep for null hours

// const func1 = ({name, age, height}) => {
//   console.log(name, age, height);
// }

// const myObj = {
//   name: 'And',
//   age: 90,
//    height: 180
// }

// const {name, age, height} = myObj
// func1(myObj)



// class Human {
//   // for constructor the same rule as for a regular function
//   someNewValue = 'test';
//   #legs = 2;
//   hands = 2;
//   head = 1;
//   constructor({name, favoriteFood, hoursOfSleep = 10}) {
//     this.name = name;
//     this.favoriteFood = favoriteFood;
//     this.hoursOfSleep = hoursOfSleep || this.hoursOfSleep;
//   }
//   walk() {
//     console.log(`${this.someNewValue} is walking`);
//   }
//   #countLegsAndHands() {
//     return this.#legs+this.hands;
//   } 
//   eat() {
//     console.log(`${this.name} is eating ${this.favoriteFood}`);
//     return this.#countLegsAndHands();
//   }
//   sleep() {
//     console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
//   }
//   walkAndEat() {
//     this.eat()
//     this.walk()
//   }
// }

// console.log(typeof Human)

// Human.prototype.countHoursOFSleepAndHands = function() {
//   return this.hoursOfSleep + this.hands;
// }
// // Usage is still same:
// // You also need new when try to build object with a class
// let human1 = new Human({name: "Mykola", favoriteFood: "Borcht", hoursOfSleep: 20}, 'someQWE');

// console.log(human1.isHuman);
// const human2 = new human1.constructor({name: 'test', favoriteFood: "Borcht"})
// console.log(human2.favoriteFood)
// // console.log(human1.hoursOfSleep);
// // console.log(human1.QWE);
// // human1.walk(); // Mykola is walking
// // human1.eat(); // Mykola is eating Borcht
// // human1.sleep(); // Mykola went sleep for null hours

// class Student extends Human {

//   constructor(name, favoriteFood, favoitureSubject){
//     super({name, favoriteFood});
//     this.favoitureSubject = favoitureSubject;
//   }

//   static #consoleLogInfo(){
//       return 'This class is about Student of University.';
//   }
//   get currentName(){
//     return this.name;
//   }

//   set currentName(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name
// ;  }

//   getMySubj() {
//     console.log(Student.#consoleLogInfo());
//     console.log(this.getName());
//     return this.favoitureSubject
//   }

// } 

// let student1 = new Student( "Mykola",  "Borcht", 'Math');
// console.log(student1.countHoursOFSleepAndHands());

// // console.log(student1.hoursOfSleep);
// // // student1.name = 'Andrii'
// // student1.currentName = 'Andrii'
// // console.log(student1.currentName);
// // console.log(student1.eat());
// // console.log(student1.getMySubj());
// // // console.log(Student.#consoleLogInfo());

// // let human1 = new Human({name: "Mykola", favoriteFood: "Borcht"});
// // console.log(human1.favoitureSubject);


// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal;

// // теперь мы можем найти оба свойства в rabbit:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps );

// const num = 1;

// console.log(num.toString())

// const arr = [1,2,3]
// Array.from()