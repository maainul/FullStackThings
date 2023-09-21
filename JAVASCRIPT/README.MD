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

```.js
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

## Template Literals

```js
let num1 = 7;
let num2 = 4;
let result = num1 + num2;

console.log("The addition of num1 and num2 is = ", result);

console.log("The addition of " + num1 + " and " + num2 + " is = ", result); // The addition of 7 and 4 is =  11

// using template literals
console.log(`The addition of ${num1} and ${num2} is ${result}`); // The addition of 7 and 4 is 11 11
```

## While and For Loop:

```js
let n = 1;
while (n <= 7) {
  console.log("HI");
  n += 1;
}

for (let i = 1; i <= 5; i++) {
  console.log(`HI ${i}`);
}
/*
for (;;) {
  console.log(hi);
}
*/
// While and  For Lop

let num = 564782;
while (num > 0) {
  console.log(num % 10);
  num = parseInt(num / 10);
}
```

## Object:

#### Objects is most important term of any programming language.Object represents the real world entity.suppose the laptop,the pen, the mobile is an objects. objects have some characteristics it is called property.

```js
let allien = {
  name: "mainul",
  age: "30",
  experience: 2,
};
console.log(allien); //{ name: 'mainul', age: '30', experience: 2 }
console.log(typeof allien); // object
console.log(typeof allien.age); // string
console.log(typeof allien.experience); // number
console.log(allien["name"]); // mainul

// complex object

let person = {
  uname: "mainul",
  age: "30",
  experience: 2,
  laptop: {
    cpu: "2.4hz",
    ram: "8 GB",
    brand: "Asus",
  },
};
console.log(person);
console.log(typeof person);
console.log(typeof person.age);
console.log(typeof person.experience);
console.log(person["uname"]);
console.log(person?.laptop1?.brand?.length); // to avoid error in js // if brand is not there then undefined will be print
delete person.age;
console.log(person); // it will not delete it only not printed
```

## For In Loop

```js
let allien = {
  name: "mainul",
  age: "30",
  experience: 2,
  laptop: {
    cpu: "2.4hz",
    ram: "8 GB",
    brand: "Asus",
  },
};

console.log(allien);

for (let key in allien) {
  console.log(key, allien[key]);
}
```

## Function

```js
function greet() {
  console.log("Hello world");
}
greet();
greet();
greet();
greet();

function greetpass(data) {
  return data;
}
let str = greetpass("Mainul");
console.log(str);
```

## Local - Global Variable :

```js
function greetpass(data) {
  console.log(num);
  return data;
}
let user = "Mainul";
let num = 5;
let str = greetpass(user);
console.log(str);
```

# Arrow Function :

```js
let greet = (data) => {
  return data;
};

console.log(greet("Mainul"));

let pass = () => {
  console.log("Pass by value");
};

pass();
```

## Methods:

```js
let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "HP",
  greet: function () {
    console.log("Hello world");
  },
};
laptop.greet();
// method : method belongs to Object./ define in an object
// function : not belongs to object
// actually methods or function is same
```

# This Keyword:

```js
let laptop1 = {
  cpu: "ip",
  ram: 16,
  brand: "HP",
  greet: function () {
    let storage = 100;
    console.log("Hello world");
    console.log(this.cpu);
    console.log(this.brand);
    console.log(storage);
  },
};

let laptop2 = {
  cpu: "i5",
  ram: 16,
  brand: "HP",
  greet: function () {
    console.log(laptop2);
  },
};

if (laptop1.cpu > laptop2.cpu) {
  console.log(laptop1);
} else {
  console.log(laptop2);
}
```

# Constructor :

A constructor is a <b>special function</b> that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to <b>create a new object and set values</b> for any existing object properties
```js
// Different Way to Create objects
// constructor in javascript:

function Alien(name, tech) {
  this.name = name;
  this.tech = tech;

  this.work = () => {
    console.log("Solving bugs from 12 hrs");
  };

  return this;
}

let alian1 = new Alien("Mainul", "JS");
let alian2 = new Alien("Kamrul", "JS");
let alian3 = new Alien("Fakhrul", "JS");
let alian4 = new Alien("Abdullah", "JS");
let alian5 = new Alien("Sobuj", "JS");

console.log(alian1);
console.log(alian2);
console.log(alian3);
console.log(alian4);
console.log(alian5);
alian1.tech="Java"
alian1.work();
console.log(alian1);

```
# Arrays :
