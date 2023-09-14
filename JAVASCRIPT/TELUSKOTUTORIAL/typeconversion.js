let msg = "Mainul Hasan";

let firstname = "Mainul";
let lastname = "Hasan";
let user = firstname + " " + lastname;
console.log(msg);
console.log(user);

let num = 6;
let numToString = String(6);
console.log(num, typeof num);
console.log(numToString, typeof numToString);
let stringNum = "123";
let numToString2 = Number(stringNum);
console.log(numToString2, typeof numToString2);
let x;
console.log(typeof x);
x = 6;
console.log(typeof x);

x = "Mainul";
console.log(typeof x);

x = 12.56;
console.log(typeof x);

/// second way to create number to string
let y;
y = 8;
y = y + "";
console.log(y, typeof y);
y = y - 2;
console.log(y, typeof y);

// Truthy and Falsy
console.log(Boolean(0)); // in JavaScript 0 is false and except 1 to infinity is true.
console.log(Boolean(null));
console.log(Boolean(1)); // so this is call falsy and truthy
console.log(Boolean(12));

// 0 is false to it is called - Falsy
// (1 to infinity) is try so it is called - Truthy

// ParseInt

let xx = parseInt("365 Mainul 456");
console.log(xx);
