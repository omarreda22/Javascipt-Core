'use strict';


// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };



// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);
// const omar = new User(103, 'Omar', 8000);

// console.log(omar.s)

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);


///////////////////////////////////////////////////////////

// class UserNewVersion {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }



// let userOneNew = new User(100, "Elzero", 5000);

// // console.log(userOne.i);
// // console.log(userOne.u);
// // console.log(userOne.s);

// // console.log(userOne instanceof User);
// // console.log(userOne.constructor === User);


// class Test {
//     constructor(a, b){
//         this.a = a
//         this.b = b
//     }
// }

// const testOne = new Test('a', 'b')
// console.log(testOne.a)

///////////////////////////////////////////////////////////



// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code

///////////////////////////////////////////////////////////
//////// Update Values


// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

///////////////////////////////////////////////////////////

/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Property
//   static count = 0;

//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }

//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());


///////////////////////////////////////////////////////////

/*
  Class
  - Inheritance
*/

/*
    - add extend {class Name}
    - add all atr in constructor 
    - add super(atr) 
*/


// // Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());


///////////////////////////////////////////////////////////

// console.log('56')
// console.log(parseInt('45'))
// console.log(parseInt('45 as'))


// ///////////// Encapsulation (Private Data) -> #


// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);


///////////////////////////////////////////////////////////


class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

console.log(myString.addDotBeforeAndAfter())
