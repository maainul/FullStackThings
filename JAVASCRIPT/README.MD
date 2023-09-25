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
alian1.tech = "Java";
alian1.work();
console.log(alian1);
```

# Arrays :

```js
let values = [5, 7, 8];
console.log(values.length);

let val = [];
console.log(val);
val.push(5);
console.log(val.push(9)); // return length of an array
console.log(val);
console.log(val[1]);
console.log(val.pop()); // return poped value from end
console.log(val.shift()); // return poped value from start
console.log(val.unshift(2)); // return add value from start
console.log(val.splice(2)); // it will remove from index number 2 to end
console.log(val.splice(2, 1)); // it will remove from index number 2 to end (first value is index value,
// last one is number of value you want to remove)

let data = [
  "Mainul",
  { tech: "js", exp: "2" },
  2,
  function () {
    console.log("Hello World");
  },
];
console.log(data);
data[3](); // inside array function call.....

// Loops in array

let loopdata = [5, 7, 8, 9, 4];
for (let n of loopdata) {
  console.log(n);
}
console.log("##############################################");
for (let key in loopdata) {
  console.log(loopdata[key]);
}

// Array Destructuring

let nums = [5, 7, 2, 4];
console.log(nums);
let [a, b, c, d] = nums;
console.log(d);
console.log(b);
console.log(c);

let words = "My Name is Mainul Hasan";
console.log(words);
let spltwrd = words.split(" ");
let [x, y, z, m, n] = spltwrd;
console.log(x, y);
console.log(spltwrd);

let mywrd = "My Name is Mainul Hasan Anik".split(" ");
let [t, r, ...g] = mywrd;
console.log(g);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1, 1, 2, 6, 7, 8];
console.log(numbers1);

// this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
```

## What are three dots (…) in Javascript

The spread syntax is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.

The spread syntax is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

### Syntax : The spread syntax is denoted by three dots, ….

```js
let array = [...value];
```

#### 1. Copying an array

```js
let array1 = ["h", "e", "l", "l", "o"];
let array2 = [...array1];
console.log(array2);
["h", "e", "l", "l", "o"]; // output
```

#### 2. Inserting the elements of one array into another

```js
let desserts = ["cake", "cookie", "donut"];
let desserts1 = ["icecream", "flan", "frozen yoghurt", ...desserts];
console.log(desserts);
//Appending baked_desserts after flan
let desserts2 = ["icecream", "flan", ...desserts, "frozen yoghurt"];
console.log(desserts2);
// output
["cake", "cookie", "donut"][
  ("icecream", "flan", "cake", "cookie", "donut", "frozen yoghurt")
];
```

#### 3. Array to arguments

```js
function multiply(number1, number2, number3) {
  console.log(number1 * number2 * number3);
}
let numbers = [1, 2, 3];
multiply(...numbers);
//Passing elements of the array as arguments to the Math Object
let numbers = [1, 2, 300, -1, 0, -100];
console.log(Math.min(...numbers));
```

## For Each Loop

```js
let nums = [42, 51, 24, 98, 65, 12];
console.log(nums);
// forEach operator will take one function . that function can do anything with this nums value.

nums.forEach((n) => {
  console.log(n);
});
```

## Filter Map Reducer

```js
let nums = [42, 51, 24, 98, 65, 12];
console.log(nums);
// forEach operator will take one function . that function can do anything with this nums value.
nums.forEach((n) => {
  if (n % 2 == 0) {
    console.log(n);
  }
});
let res = nums.filter((n) => n % 2 === 0);
console.log(nums);
console.log(res);
// filter will filter the value.

let result1 = nums.filter((n) => n % 2 === 0).forEach((n) => console.log(n));

// filter will filter the value.
// from all nums it will give specific value based on condiiton
// from that confition map each value and do some operation.
// after operation print value.

let nums1 = [42, 51, 24, 98, 65, 12];
nums1
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .forEach((n) => console.log(n));

// reduce will give one single value
let r = nums1
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((x, y) => x + y);

console.log(r);

```
# Set

```js
let nums = new Set("bookkeeper");
nums.add(3);
nums.add(3.5);
nums.add("Navin");
console.log(nums);

nums.forEach((value) => {
  console.log(value);
});

console.log(nums.has(3));
console.log(nums.has('p'));

```