### Declare a function

```js
function functionName(parameters) {
  // funciton body
}
```

### Function real Example

```js
function say(message) {
  console.log(message);
}
```

### Calling a function

```js
function(argument);
```

```js
say("Hi");
```

### Parameters vs. Arguments

Parameter : When declaring a function we specify parameters.

```js
function say(msg) {}
// here message is parameter
```

Argument: When Calling a function we pass argument.

```js
say("Hi");
// here hi is argument
```

### Returning a value

Every function in javascript implicitly returns undefined. unless you explicitly spefify a return value.

```js
function say(message) {
  console.log(message);
}

let result = say("Hello");
console.log("Result", result);
```

Output

    Hello
    Result : undefined

### Let's Return Value

```js
function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log("Sum = ", sum);
```

Output

    Sum = 30

### The arguments object

Inside a function, you can access an object called arguments that represents the named arguments of the function.

```js
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
```

### JavaScript Functions are First-Class Citizens

1. <b>store</b> functions in variables,
2. <b>pass</b> them to other functions as arguments,
3. <b>return</b> them from other functions as values.

#### Storing functions in variables

```js
function add(a, b) {
  return a + b;
}
let sum = add;
```

By doing this, we can have two ways to execute the same function. For example, we can call it normally as follows:

```js
let result = add(10,20);

let result sum(10,20);
```

#### Passing a function to another function

Because functions are values, you can pass a function as an argument into another function.

```js
function add(a, b) {
  return a + b;
}
let sum = add;

function average(a, b, fn) {
  return fn(a, b) / 2;
}

let result = average(10, 20, sum);
console.log(result);
```

Output :

    15

### Example : 2

```js
function greet() {
  return "Hello";
}

function name(user, func) {
  const message = func();
  console.log(`${message} ${user}`);
}
name("Mainul", greet);
name("Hasan", greet);
name("Anik", greet);
name("Kusum", greet);
```

Output

    Hello Mainul
    Hello Hasan
    Hello Anik
    Hello Kusum

<b>Becarefull about this topic</b>

```js
function sayHello(param) {
  console.log("Hello", param);
  param();
  return "Hiiii Geeks for Geeks";
}

function smaller() {
  console.log("Is Everything alright");
}

const returnhello = sayHello(smaller);
console.log(returnhello);
```

Output

    hello [Function: smaller]
    Is everything alright
    Hiii Geeks for Geeks

### Example : 3

```js
function geeks_inner(value) {
  return "hello User!" + value;
}

function geeks_outer(a, func) {
  console.log(func(a));
}

geeks_outer("Geeks!", geeks_inner);
```

Output

    hello User!

### Intro

An anonymous function is a function without a name.

```js
(function () {
  // logic
});
```

### Example 1

```js
let show = function () {
  cosole.log("Anonymous function ");
};

show();
```

### Arrow Functions

```js
let show = function (){
    console.log('Normal function')
};

// annonymous function
 let show = () =>{
    console.log('Anonymous function ');
 }

//
let add = function (a,b){
    return a + b ;
}
// arrow function
let add = (a, b) = > a + b;

```

### Pass-By-Value

In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function. In other words, the changes made to the arguments are not reflected outside of the function.

If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript.

```js
function square(x) {
  x = x * x;
  return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100
console.log(y); // 10
```

First, define a square() function that accepts an argument x. The function assigns the square of x to the x argument.

Next, declare the variable y and initialize its value to 10:

Then, pass the y variable into the square() function. When passing the variable y to the square() function, JavaScript copies y value to the x variable.

After that, the square() function changes the x variable. However, it does not impact the value of the y variable because x and y are separate variables.

Finally, the value of the y variable does not change after the square() function completes.

If JavaScript used the pass-by-reference, the variable y would change to 100 after calling the function.

### Default Parameters

In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

```js
function say(message = "Hi") {
  console.log(message);
}
say();
say("Hello");

function add(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(add());
```

### Function Type

In Javascript all functions are objects. They are the instances of the Function type.Beacuse Functions are objects, they have properties and method like other objects.

### Functions properties

Each function has two important properties :

1. length : determines the number of named arguments specified in the function declaration.
2. prototype : references the actual function object.

Example

```js
function add(x, y) {
  return x + y;
}
console.log(add.length); // 2
console.log(add.prototype); // Object{}
```

### Function Call types

```js
let rs = add(34, 35);
console.log(rs);

let rs = new add(34, 20);
```

### new.target : Check function call type

By using the new.target, you can control how a function will be called.If a function is called normally, the new.target is undefined. However, if the function is called using the new keyword as a constructor, the new.target return a reference to the constructor.

```js
function add(x, y) {
  console.log(new.target);
  return x + y;
}
let result = add(10, 20); // undefined
let object = new add(10, 20); // [Function: add]
```

### Error check with new.target

```js
function add(x, y) {
  if (new.target) {
    throw "The add function can not be called as a constructor";
  }
  return x + y;
}

let obj = new add(10, 20);
console.log(obj);
```

## call()

With the call() method, you can write a method that can be used on different objects.
In JavaScript all functions are object methods.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
```

Result

    John Doe

### Use Call Method

```js
let fullName = function () {
  return this.firstName + " " + this.lastName;
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(fullName.call(person1));
console.log(fullName.call(person2));
```

The call() method takes arguments separately.

The apply() method takes arguments as an array.

```js
let fullName = function (city, country) {
  return this.firstName + " " + this.lastName + "," + city + "," + country;
};

const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(fullName.call(person, "Oslo", "Norway")); //John Oslo Norway
console.log(fullName.apply(person, ["Dhaka", "Bangladesh"])); // Mary Doe Dhaka Bangladesh
```

## Bind() :

The main deference between bind() and other method is bind() method retrurn function(exact copy of a method).
from that method we can print the method and as well as method information

```js
let introduction = function () {
    console.log(this.name + " studies in grade " + this.grade + ".");
  };

const student1 = {
  name: "Jack",
  grade: "5",
};

const student2 = {
  name: "jimmy",
  grade: "6",
};

introduction.bind(student1);
introduction.bind(student2);
```
## Let's Use the bind() method:

```js
// object definition
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + ".");
  },
};

// object definition
const student2 = {
  name: "Jimmy ",
  grade: " 6",
};
// the object student2 is borrowing introduction method from student1
let result = student1.introduction.bind(student2);
// invoking introduction() function
result();
// Output:
// Jimmy studies in grade 6.
```

### Closure

In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created

### Lexical Scoping

```js
let name = "John";

function greeting() {
  let msg = "Hi";
  console.log(msg, " " + name);
}
```

The variable name is a global variable. It is accessible from anywhere including within the greeting() function.
The variable message is a local variable that is accessible only within the greeting() function.

```js
function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting("Hi");
let sayHello = greeting("Hello");

console.log(sayHi("John")); // Hi John
console.log(sayHello("John")); // Hello John
```

```js
function foo(outer_arg) {
  function inner(inner_arg) {
    return outer_arg + inner_arg;
  }
  return inner;
}
let get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));
```

    9
    8

## Immediately Invoked Function Expressions (IIFE)

Functions are one of the building blocks of any programming language and JavaScript has taken these Functions to a whole new level. Functions are said to be a collection of statements to be executed in a proper sequence in a particular context. Now JavaScript provides a variety of methods to define and execute Functions, there are 3 types of functions in javascript

1. named function
2. anonymous functions
3. Immediately Invoked Function Expressions or IIFEs.(Functions that are executed as soon as they are mounted)

   3.1. Annonymous IIFE

   3.2. Nammed IIFE

### IIFE Syntax (Annonymous IIFE):

```js
(function () {})();
```

If we look at the syntax itself we have two pairs of closed parentheses, the first one contains the logic to be executed and the second one is generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.

```js
// Normal Function
function Greet() {
  console.log("This is normal Function");
}
Greet();
// IIFE creation and execution.
(function () {
  console.log("Welcome to GFG!");
})();
```

Result :

    This is normal Function
    Welcome to GFG!

### Important Points:

IIFE follow their own scope like any other function/variable in JavaScript.IFE is defined within a function and will only be immediately invoked if we call it the Parent Function.

```js
function myFunc() {
  console.log("Welcome to");
  // This will be executed after executing the previous log.
  (function () {
    console.log("GeeksForGeeks!");
  })();
  console.log("Hi There!");
}

// Calling the Function.
myFunc();
```

Result :

    Welcome to
    GeeksForGeeks!
    Hi There!

### Rules of IIFE

1. IIFEs have their own scope i.e. the variables you declare in the Function Expression will not be available outside the function.
2. Similarly to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.
3. IIFEs can also have parameters. For example,

### Use Case of IIFE

1. Avoid <b>polluting</b> the global namespace
2. To create <b>closures</b>
3. Avoid <b>conflict of variable</b> names between libraries and programs.
4. IIFE is used to create <b>private</b> and <b>public</b> variables and methods
5. It is used to execute the <b>async and await</b> function
6. It is used in <b>JQuery Library</b>
7. It is used to work with <b>require function</b>

### 3.2. IIFE Nammed Function

```js
// Nammed Function
const counter = (function () {
  let count = 0;
  function cnt() {
    return (count += 10);
  }
  return {
    cntr: cnt,
  };
})();
console.log(counter.cntr());
```

```js
const counterr = (function () {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
})();

console.log(counterr()); // 1
```

### Use of IIFE In Real World

```js
// Use of real world example

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

let result = add(5, 2);
let mulres = mul(5, 2);
let subres = sub(5, 2);
let divres = div(5, 2);

console.log(result);
console.log(mulres);
console.log(subres);
console.log(divres);

// USE IIFE Function

const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function mul(a, b) {
    return a * b;
  }
  function sub(a, b) {
    return a - b;
  }
  function div(a, b) {
    return a / b;
  }
  return {
    addition: add,
    multiply: mul,
    subtraction: sub,
    division: div,
  };
})();

console.log(calculator.addition(1, 2));
console.log(calculator.multiply(2, 2));
console.log(calculator.division(6, 2));
console.log(calculator.subtraction(6, 2));
```

```js
const uniqueId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `id_${count}`;
  };
})();

console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
```

Result :

    id_1
    id_2
    id_3
    id_4

Note that the count variable is inaccessible from outside of the IIFE. Except for the function that's being returned, nobody can read or modify the count variable. This allows for the creation of truly private state that can only be modified in a controlled fashion.

```js
const cntr = (function () {
  let counterValue = 0;
  return {
    increment() {
      ++counterValue;
    },
    get value() {
      return counterValue;
    },
  };
})();

cntr.increment();
console.log(cntr.value);

cntr.increment();
cntr.increment();
console.log(cntr.value);
```

```js
const User = (() => {
  let userName = "Geek";
  let userSecret = "Like using IIFE";
  return {
    getName: () => userName,
    getSecret: () => userSecret,
  };
})();

console.log(User.getName()); // returns "Geek"
console.log(User.getSecret()); // returns "Likes using IIFE"
console.log(User.userName); // returns undefined.
```

```js
const UserNormalFunc = (() => {
  let userName = "Geek";
  let userSecret = "Like using IIFE";
  function getUserName() {
    return userName;
  }
  function getUserSecret() {
    return userSecret;
  }
  return {
    getName: getUserName,
    getSecret: getUserSecret,
  };
})();

console.log(UserNormalFunc.getName()); // returns "Geek"
console.log(UserNormalFunc.getSecret()); // returns "Likes using IIFE"
```

<b>Conclusion:</b>
An IIFE may not see being used a lot in regular coding projects but it is one of those things that exist and has practical use cases in the real world. You might find yourself creating projects which might be used by other developers and concepts like IIFE will definitely come in handy. You might also find a few open-source projects that extensively use concepts like closures, IIFE, function currying, composition, and many more.

### Returning Multiple Values from a Function

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";

  return [firstName, lastName];
}

let names = getName();
const firstName = names[0],
  lastName = names[1];
console.log(firstName);
console.log(lastName);

const [firstName1, lastName1] = getName();
console.log(firstName1);
console.log(lastName1);
```

### Returning multiple values from an function using an object

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";

  return {
    firstName: firstName,
    lastName: lastName,
  };
}
```

### Shorten

```js
function getName() {
  let firstName = "john",
    lastName = "Doe";
  return { firstName, lastName };
}
```

### Get the return values as an object

```js
let names = getNames();
let firstName = names.firstName;
let lastName = names.lastName;

let { firstName, lastName } = getName();
```

<b>JavaScript doesn’t support functions that return multiple values. However, you can wrap multiple values into an array or an object and return the array or the object.</b>

### Arrow Functions

ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

### Add two number

```js
let add = function (x, y) {
  return x + y;
};
console.log(add(10, 20)); // 30
```

### Arrow Function

```js
let add = (x, y) => x + y;
console.log(add(10, 20)); // 30
```

### We can define return statement

```js
let add = (x, y) => {
  return x + y;
};
console.log(add(10, 20)); // 30
```

### When You Should Not Use Arrow Functions

An arrow function doesn’t have its own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object.

### Introduction

A rest parameter has a prefix of three dots(...).A rest parameter allows you to represent an indefinite number of arguments as an array.

```js
function fn(a, b, ...args) {
  //...
}
```

All the arguments you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc., will be stored in the rest parameter args as an array. For example:

```js
fn(1,2,3,"A","B","C");

a = 1
b = 2
..args = [3,"A","B","C"]

```

If you pass only the first two parameters, the rest parameter will be an empty array:

```js
fn(1, 2);
```

args

    []

Notice that the rest parameters must appear at the end of the argument list. The following code will result in an error:

```js
function fn(a, ...rest, b){
    // error
}

```

Error :

    SyntaxError: Rest parameter must be last formal parameter

### More JavaScript rest parameters examples

```js
function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}
sum(1, 2, 3);
```

Output

    6

An arrow function does not have the arguments object. Therefore, if you want to pass some arguments to the arrow function, you must use the rest parameters. See the following example:

### CallBack Function:

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

```js
function display(result) {
  console.log(result);
}

function add(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

add(10, 20, display);

function isOdd(number) {
  return number % 2 != 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function filter(numbers, fn) {
  let result = [];
  for (const num of numbers) {
    if (fn(num)) {
      result.push(num);
    }
  }
  return result;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
```

Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.
