## Immediately Invoked Function Expressions (IIFE)
Functions are one of the building blocks of any programming language and JavaScript has taken these Functions to a whole new level. Functions are said to be a collection of statements to be executed in a proper sequence in a particular context. Now JavaScript provides a variety of methods to define and execute Functions, there are 3 types of functions in javascript

1. named function
2. anonymous functions
3. Immediately Invoked Function Expressions or IIFEs.(Functions that are executed as soon as they are mounted)

    3.1. Annonymous IIFE

    3.2. Nammed IIFE 

### IIFE Syntax (Annonymous IIFE):
```js
(function (){})();
```
If we look at the syntax itself we have two pairs of closed parentheses, the first one contains the logic to be executed and the second one is generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.

```js
// Normal Function
function Greet(){
    console.log("This is normal Function");
}
Greet();
// IIFE creation and execution.
(function() {
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
4. IIFE is used to create <b>private</b> and  <b>public</b> variables and methods
5. It is used to execute the <b>async and await</b> function
6. It is used in <b>JQuery Library</b>
7. It is used to work with <b>require function</b>

### 3.2. IIFE Nammed Function 
```js
// Nammed Function
const counter = (function (){
    let count = 0;
    function cnt(){
        return count += 10;
    }
    return {
        cntr : cnt
    }
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

function add(a,b){
    return a + b;
}

function mul(a,b){
    return a * b;
}

function sub(a,b){
   return a - b
}

function div(a,b){
    return a / b;
}

let result = add(5,2);
let mulres = mul(5,2);
let subres = sub(5,2);
let divres = div(5,2);

console.log(result);
console.log(mulres);
console.log(subres);
console.log(divres);

// USE IIFE Function

const calculator = (function(){
    function add(a,b){
        return a + b;
    }

    function mul(a,b){
        return a * b;
    }
    function sub(a,b){
        return a - b;
    }
    function div(a,b){
        return a / b;
    }
    return {
        addition : add,
        multiply : mul,
        subtraction : sub,
        division : div
    }
})();


console.log(calculator.addition(1,2));
console.log(calculator.multiply(2,2));
console.log(calculator.division(6,2));
console.log(calculator.subtraction(6,2));

```

```js
const uniqueId = (function (){
    let count = 0;
    return function (){
        ++count;
        return `id_${count}`
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
const cntr = (function (){
    let counterValue = 0;
    return {
        increment(){
            ++counterValue;
        },
        get value(){
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
const User = (()=>{
    let userName = "Geek";
    let userSecret = "Like using IIFE";
    return{
        getName : () => userName,
        getSecret: () => userSecret
    }
})();

console.log(User.getName());    // returns "Geek"
console.log(User.getSecret());  // returns "Likes using IIFE"
console.log(User.userName);     // returns undefined.
```
```js
const UserNormalFunc = (()=>{
    let userName = "Geek";
    let userSecret = "Like using IIFE";
    function getUserName(){
        return userName
    }
    function getUserSecret(){
        return userSecret
    }
    return{
        getName : getUserName,
        getSecret: getUserSecret
    }
})();

console.log(UserNormalFunc.getName());    // returns "Geek"
console.log(UserNormalFunc.getSecret());  // returns "Likes using IIFE"

```

<b>Conclusion:</b>
 An IIFE may not see being used a lot in regular coding projects but it is one of those things that exist and has practical use cases in the real world. You might find yourself creating projects which might be used by other developers and concepts like IIFE will definitely come in handy. You might also find a few open-source projects that extensively use concepts like closures, IIFE, function currying, composition, and many more.
 