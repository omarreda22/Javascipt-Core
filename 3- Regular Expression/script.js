'use strict';


//  \w -> word
//  \d -> number
  

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));

////////////////////////////////////////////////////////////////////////////


let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-zA-Z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
const test = /[a-z.%]/g
// console.log(myString.match(test))
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));

///////////////////////////////////////////////////////////////////////////////


let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
const test1 = /\w@\w.\w+/g;
// console.log(email.match(test1));
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));



///////////////////////////////////////////////////////////////////////////////


let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));


///////////////////////////////////////////////////////////////////////////////


let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

let numsss = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRess = /0\d*0/ig;
// console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsResss = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));



///////////////////////////////////////////////////////////////////////////////

let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

///////////////////////////////////////////////////////////////////////////////


let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
let res = /@/ig;
// console.log(txt.replaceAll(res, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));

///////////////////////////////////////////////////////////////////////////////


document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  console.log(validationResult)
  if (validationResult === false) {
    return false;
  }
  return true;
}