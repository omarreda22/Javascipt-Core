'use strict';


// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.now()); // 1000 Mill = 1 Second

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);

/////////////////////////////////////////////////////////////

// let dateNow = new Date();
// let birthday = new Date("Sep 10, 01");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);


// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());




/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



 

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(generator);

// // Data in yield don't run untill you ask

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }

/////////////////////////////////////////////////////////////

/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


/////////////////////////////////////////////////////////////


// function* customGenerate(){
//   const num = "it's Work!";
//   yield num;
//   yield 1
// };

// const gen = customGenerate()

// console.log(gen.next());


/////////////////////////////////////////////////////////////

/*
  - yield Infinite Numbers
*/

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A";
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


/////////////////////////////////////////////////////////////



/*
  Modules
  - Import And Export
*/

// from another  file
// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };

// // Main file

// import { a, arr, saySomething as s } from "./main.js";

// console.log(a);
// console.log(arr);
// console.log(s());

// import everything

// import * as all from "./main.js";

// console.log(all);

// console.log(all.myNumber);
// console.log(all.arr);