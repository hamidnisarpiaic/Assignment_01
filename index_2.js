"use strict";
// Exercise No. 3
// declaring variable
var myNam = "Hamid";
console.log("Hello, ".concat(myNam, "!"));
// to lower case
var lcNam = myNam.toLowerCase();
console.log("Hello, ".concat(lcNam, "!"));
// to upper case
var ucNam = myNam.toUpperCase();
console.log("Hello, ".concat(ucNam, "!"));
// to split the first letter
var fl = ucNam.slice(0, 1);
console.log(fl);
var rol = lcNam.slice(1, lcNam.length);
console.log(rol);
// to concat
var tcNam = fl + rol;
// to title case
console.log("Hello, ".concat(tcNam, "!"));
