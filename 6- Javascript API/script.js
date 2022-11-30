'use strict';



// Get From Server
// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// // Convert To JS Object
// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// // Update Data
// myJsObject["Username"] = "Elzero";
// myJsObject["Age"] = 40;

// // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer); 


/////////////////////////////////////////////////////////////////////////////////

// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

/////////////////////////////////////////////////////////////////////////////////

// request -> status code -> response

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/omerreda/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

/////////////////////////////////////////////////////////////////////////////////


/////////////////////// Ajax
/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       // let div = document.createElement("div");
//       // let repoName = document.createTextNode(jsData[i].full_name);
//       // div.appendChild(repoName);
//       // document.body.appendChild(div);
//       // console.log(jsData[i])
//       console.log(jsData[i]['full_name'])
//     }
//   }
// };

/////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector(".title");

// function addAction(e){
//   e.target.style.color = '#000';
// };


// title.addEventListener('click', addAction);



// setTimeout(function(){
//   title.style.color = '#000'
// },3000)

/////////////////////////////////////////////////////////////////////////////////


/////////////////// Promise

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/


/////////////// /Example One

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

/////////////// /Example Two

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// });

// console.log(myPromise );

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

// myPromise.then(resolver, rejecter);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

/////////////////////////////////////////////////////////////////////////////////

// const list = ['a', 'b', 'c', 'd'];
// console.log(list.length)
// list.length = 3;
// console.log(list)

//// Example on promise with(then -> True, catch -> if false, finally)

// const myPromise = new Promise((happend, notHappend)=>{
//   const employees = ['omar', 'reda', 'ahmed', 'ali'];
//   if(employees.length === 4){
//     happend(employees)
//   }else{
//     notHappend(Error(`employees come is ${employees.length}`))
//   }
// });

// myPromise.then(
//   (happend) => {
//     console.log("it's First Then");
//     happend.length = 3;
//     return happend
//   }).then(
//   (happend) => {
//     console.log(happend);
//     happend.length = 2;
//     return happend
//   }
//   ).then(
//   (happend) => {
//     console.log(happend);
//     const getJop = happend[1];
//     console.log(getJop)
//   }
//   ).catch(
//   (notHappend)=> {
//     const p = 4
//     console.log(p)
//     console.log(notHappend)
//   }).finally(console.log("it's Done"));

/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


 
////// Ajax Example

// const getData = (apiLinl) => {
//     return new Promise((happend, notHappend) => {
//         const myRequest = new XMLHttpRequest();
//         // Load Request
//         myRequest.onload = function(){
//             if (this.readyState === 4 && this.status === 200){
//                 happend(JSON.parse(this.responseText));
//             }else{
//                 notHappend(Error("This link invalid"));
//             }
//         }
//         // Send Request
//         myRequest.open('GET', apiLinl);
//         myRequest.send();
//     }).then(
//         (happend) => {
//             happend.length == 10;
//             return happend;
//         }
//     ).then(
//         (h) => {
//             const second = h[0].name;
//             console.log(second)
//             return second;
//         }
//     ).catch((nH) => console.log(nH));
// }

// getData("https://api.github.com/users/omerreda/repos");


/////// Fetch Example


// fetch("https://api.github.com/users/omerreda/repos")
//     .then(
//         (happend) => {
//             const myData = happend.json();
//             console.log(myData);
//             // console.log(myData.length) // -> Wrong 
//             return myData;
//         }
//     ).then(
//         (dataFromRequest) =>{
//             console.log(dataFromRequest[1].name)
//         }
//     ).catch((invalid) => console.log('invalid link'))



////////////////////////////////////////////////////////////////////////////////////


// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promise");
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Second Promise");
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Third Promise");
//   }, 2000);
// });

// // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// // );

// // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// // );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//// normal promise -> syntax sugar -> Async

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/



////////// normal promise

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

///////// syntax sugar

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

//////// Async

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

////////////////////////////////////////////////////////////////////////////////////

/// make js wait promise done
/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise);
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/*
  Async & Await With Try, Catch, Finally
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

// async function fetchData() {
//   console.log("Before Fetch");
//   try {
//     let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
//     console.log(await myData.json());
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// fetchData();
