# JAVASCRIPT TUTORIALS FROM TELUSKO : Learning Javascript AS A Programming Language.

1. What is JavaScript ?
   Java Script is a Programming language.By that Programming Languae we can Build
1. Web Application
1. Desktop Application
1. Mobile Application
1. Machine Learning
   Application. From that one programming language we can learn build all of this.So,Let's Get Started.
   Oracle owns Javascript.

1. Lets learn some interesting this.

For converting javascript code into machinge code it has javascript engine
so.
javascriptcode ---->javascript engine ----> Mechine Code ----> Its works then(Hello world)

## Variables: Store data use variable.We can Change the value of it.

In a Variable can have
characters,
number,(not as a first character)
underscore,
dash,
hyphen

Better Way :
Snake Case : user_name  
Camel Case : userName

```js
let num = 3;
let username = "Mainul Hasan Anik";
console.log(username);
console.log(num);
num = 10;
console.log(num);
```

## Constant :

Find Area of a Circle.

## Type Conversion :

Number -------> String
String -------> Number
Number -------> Boolean

Rule :
Number + String = String
Number - String = Number

```js
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

let xx = parseInt("365 Mainul 456");
console.log(xx);
```

## Arithmetic Operator :

```js
let num1 = 4;
let num2 = 2;

let result1 = num1 + num2;
let result2 = num1 - num2;
let result3 = num1 * num2;
let result4 = num1 / num2;
let num1t = true;
let num2t = true;
let resultt = num1t + num2t; // true = 1 + true =1 = 2
// false and true
let num12t = false;
let num22t = true;
let resultt2 = num12t + num22t; // false = 0 + true = 1 = 1

console.log(result1);
console.log(result2);
console.log(result3);
console.log(resultt);
console.log(resultt2);

let nn1 = true;
console.log(nn1);
num1++;
console.log(num1);
// DBB13
//DBB15

let testnum = 4;
let x = ++testnum; // post increment 5 5
console.log(x, testnum);
let y = testnum++; // pre increment // 5 6
console.log(y, testnum);
let resultmath = Math.pow(4, 3); // 4 * 4 * 4 = 64
console.log(resultmath);
console.log(4 ** 4); // 256 // 4*4*4*4
console.log(16 * 16); // 254
```

## Conditional Operator

```js
//  1. Simple Condition
let n = 7;
let m = 8;
let o = 9;
if (n > m) {
  console.log("N is greater", n);
} else {
  console.log("M is Greater", m);
}

// 2. 3 Condition

let p = 505;
let q = 66;
let r = 7;

if (p > q && p > r) {
  console.log("P is Greater Value", p);
} else if (q > r) {
  console.log("Q is Greatest Value", q);
} else {
  console.log("R is Greatest Value", r);
}
```

## Ternary Operator

```js
let num = 4;
let result;

if (num % 2 === 0) {
  result = "EVEN";
} else {
  result = "ODD";
}
console.log(result);

result = num % 2 === 0 ? "EVEN" : "ODD";
console.log(result);
```
## Switch Case:
```js

// Mon - 7pm
// Tue - Thurs - 4am
// Fri - 9am
// Sat - sun - 8am

let day = "Mon"

if(day === "Mon"){
    console.log("7 pm");
}else if (day === "Tue"){
    console.log("4 am");
}else if (day === "Fri"){
    console.log("9 am");
}else{
    console.log("8 am");
}

switch(day){
    case 'Mon':
        console.log("7 pm");    
        break; 
    case 'Tue':
        console.log("4 pm");  
        break;
    case 'Fri':
        console.log("9 pm");
    default:
        console.log("8 pm");  
}

```
