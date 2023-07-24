"use strict";
// Exercise No. 3
// declaring variable
let myNam = "Hamid";
console.log(`Hello, ${myNam}!`);
// to lower case
let lcNam = myNam.toLowerCase();
console.log(`Hello, ${lcNam}!`);
// to upper case
let ucNam = myNam.toUpperCase();
console.log(`Hello, ${ucNam}!`);
// to split the first letter
let fl = ucNam.slice(0, 1);
console.log(fl);
let rol = lcNam.slice(1, lcNam.length);
console.log(rol);
// to concat
let tcNam = fl + rol;
// to title case
console.log(`Hello, ${tcNam}!`);