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


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Select ELements

const selectById = document.getElementById("te");
const selectByClassName = document.getElementsByClassName("test-class");
const selectByTag = document.getElementsByTagName("p");
const justSelect = document.querySelector(".test-class");
const justSelectAll = document.querySelectorAll(".test-class");

// console.log(selectById);
// console.log(selectByClassName);
// console.log(selectByClassName[1]);
// console.log(selectByTag[0]);
// console.log(justSelect);
// console.log(justSelectAll);

// let arr = [...justSelectAll, "Omar"];
// console.log(arr)

// justSelectAll.forEach(function (n) {
//   n.innerHTML = "Hello After Edit"
// })

// console.log(document.title)
// console.log(document.body)
// console.log(document.forms)
// console.log(document.forms[0].first)
// console.log(document.forms[0].first.value)
// console.log(document.links)
// console.log(document.links[0].links)
// console.log(document.images)


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// Type and Edit on content
// [ innerHTML - textContent ]

// selectById.innerHTML = 'After'
// selectById.textContent = 'Bfter'

// console.log(document.links)
// document.links[0].href = 'https://google.com'
// document.links[0].title = 'Search'
// document.links[0].id = 'search'
// document.links[0].className = 'search'

// console.log(document.links[0].className)


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// // Create Element
// const addText = function (num = 0) {
//   const build = document.createElement('div');
//   build.className = 'test-class';
//   build.setAttribute("data", "test-data");
//   const createAtrr = document.createAttribute('Null-Att');
//   build.setAttributeNode(createAtrr);
//   const text = document.createTextNode(`My Text ${num}`);
//   build.appendChild(text)
//   document.body.appendChild(build)
// }




// // for()
// const arr = [...Array(100).keys()]
// for (let i = 0; i < arr.length; i++) {
//   console.log(i)
//   addText(i + 1)
// }


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// Events 
// [ onclick - oncontextmenu(click right) - onmouseenter - onmouseleave ]
// forms events -> [ onfoucus - onblur - onsubmit ]

// const pa = document.getElementById("te");
// // pa.addEventListener('click', function () {
// //   console.log('omar')
// // })

// pa.onload = function () {
//   console.log('omar')
// }


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Events Simulation 
// [ click - foucs - blur ]

const second = document.querySelector('.second');

// window.onload = function () {
//   second.focus();
// }

// when leave the page or click out
// window.onblur = function () {
//   document.links[1].click();
// }

// second.onblur = function () {
//   document.links[0].click()
// }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// Class List
// [ length - contains - item[index] ]
// [ add - remove - toggle ]

const ele = document.querySelector('.test-class');
// console.log(ele);
// console.log(ele.classList);
// console.log(ele.classList.contains('two'));
// console.log(ele.classList.item(1));

// ele.onclick = function () {
//   ele.classList.add('omar');
//   ele.classList.remove('one');
//   ele.classList.toggle('test-class');
// }


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// Css Style
// [ style - cssText ]
// [ removeProperty - setProperty ] 

// ele.style.color = 'red';
// ele.style.fontWeight = 'Bold';
// ele.style.cssText = 'color:red;font-size:22px;font-weight:bold'

// ele.style.removeProperty('color');
// ele.style.setProperty('font-size', '40px')


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// Deal with elements , Adding element as "appendChild" 
// [ before - after ] -> after or before ele
// [ append - prepend ] -> top or bottom inside ele
// [ remove ] 

// ele.after('Omar');


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// Find element before and next our element

// [ nextSibling - previousSibling]
// [ nextElementSibling - previousElementSibling]
// parentElenet

// const trav = document.getElementsByClassName('two')[1];
// console.log(trav.previousElementSibling)
// console.log(trav.nextElementSibling)
// console.log(trav.parentElement)

// trav.onclick = function () {
//   trav.parentElement.style.display = 'none';
// }


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// // Copy for elements
// // [ cloneNode(true) ] 

// // const eleForCopy = document.querySelector('.main-class');
// // const eleCopy = document.querySelector('.main-class').cloneNode(true);
// // eleCopy.style.color = 'red';
// // console.log(eleCopy);
// // console.log(eleForCopy);
// // eleForCopy.appendChild(eleCopy)

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////

// // addEvent
// const eleMain = document.querySelector('.four');
// eleMain.style.color = 'red';
// eleMain.addEventListener('click', function () {
//   console.log('omar')
// })

// // create elecopy from element
// const bulidFunction = function () {
//   const funcCopy = eleMain.cloneNode(true);
//   funcCopy.className = 'classTest'
//   document.body.appendChild(funcCopy);

// }

// eleMain.addEventListener('click', bulidFunction);
// // eleMain.addEventListener('click', function () {
// //   const funcCopy = eleMain.cloneNode(true);
// //   document.body.appendChild(funcCopy);
// // });


// // target meaning space i target in page
// document.addEventListener('click', function (e) {
//   if (e.target.className === 'classTest') {
//     const funcCopy = eleMain.cloneNode(true);
//     funcCopy.className = 'classTest'
//     document.body.appendChild(funcCopy);
//   }
// })



// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////

// Json and API
// const myRequest = new XMLHttpRequest();
// myRequest.open('GET', 'https://api.github.com/users/omarreda9/repos')
// myRequest.send();
// console.log(myRequest)
// console.log(myRequest.onreadystatechange);
// myRequest.onreadystatechange = function () {
//   console.log(myRequest.readyState)
//   console.log(myRequest.status)
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(myRequest.responseText)
//   }
// }
const ourput = document.querySelector('.json-data')
// console.log(ourput)
const myRequest = new XMLHttpRequest();
myRequest.open('GET', 'data.json')
// myRequest.open('GET', 'https://api.github.com/users/omarreda9/repos')
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    // we are do this condition because will get this data towic
    // first we readystate equal and second we equal 4
    // console.log(this.responseText)
    const jsonData = JSON.parse(this.responseText)
    console.log(jsonData[0]["omar"])
    for (let i = 0; jsonData.length > i; i++) {
      console.log(jsonData[i].omar)

    }
  }
}