// Regular Function.
function Greet() {
  console.log("Welcome to GFG!");
}
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function () {
  console.log("Welcome to GFG!");
})();

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

// IIFE Rules:
(function (dt) {
  console.log(dt.toLocaleTimeString());
})(new Date());

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

const counterr = (function () {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
})();

console.log(counterr()); // 1

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
