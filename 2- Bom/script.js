'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// [ Alert -> doing nothing
// Confirm -> return ture or false 
// prompt -> 

// const confirmm = confirm("are your sure")
// console.log(confirmm)




//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

////// setTimeout -> will run after some time as 3000 -> 3s

// function sayHello(name, age) {
//   console.log(`Hello ${name}, your age is ${age}`)
// }

// const setTime = setTimeout(sayHello, 2000, 'Omar', '21')

////// clearTimeout
// const btnStop = document.querySelector('.btn-stop');
// btnStop.addEventListener('click', function () {
//   clearTimeout(setTime)
// })

//////  setInterval -> will run every some time as 1000 -> 1s

// const num = document.querySelector('.num');
// const counter = setInterval(countdown, 1000)

////// clearInterval
// function countdown() {
//   num.textContent -= 1
//   if (num.textContent === '0') {
//     clearInterval(counter)
//   }
// };

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/////////////////// location
// [ href


///// href

// can change href 
console.log(location.href)
// location.href = 'https://google.com'
// can go to anywhere 
// location.href = '#'


///// host and hostname
console.log(location.host)
// can change
// location.hostname = 'plapla'

///// protocol -> http or https 
// location.protocol
// can change

///// hash
// location.hash

///// reload
// location.reload

///// replace -> will replace url by anthor url
// location.replace('https://google.com')


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

////////// scrolling

const btnScrolling = document.querySelector('.btn-scrol');

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btnScrolling.style.display = "block"
  } else {
    btnScrolling.style.display = "none"
  }
}

btnScrolling.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

///////////////////////  Local Storage

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One 
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// Exmple Keep color of web site 
// v 112

///////////////////////////////////////////////
///////////////////////////////////////////////