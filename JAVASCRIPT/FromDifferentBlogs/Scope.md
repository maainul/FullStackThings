## Scope:

Scope means variable access. scope determines the accessibility/visibility of a variable.The scope is simply a box with a boundary for variables, functions, and objects. These boundaries put restrictions on variables and determine whether you have access to the variable or not. It limits the visibility or availability of a variable to the other parts of the code.
There’re 3 kinds of scopes in JavaScript:

1. Local Scope/Function Scope
2. Global scope
3. Block Scope

### 1. Local Scope:

Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.

The code inside a function has access to:

1. the function’s arguments.
2. local variables declared inside the function.
3. variables declared in its parent function’s scope.
4. global variables.

![image](https://github.com/maainul/node-express-react-mysql/assets/37740006/86f4e2f7-a3bd-43fb-b7c9-6f46627c07b9)

Any variable created inside the yellow box is a local variable, just like any variable inside blue box is a global one. To make it super easy to understand, the blue box represents the global scope while yellow box represents the local scope.
Let’s take a look another image.

![image](https://github.com/maainul/node-express-react-mysql/assets/37740006/ccccdf94-fe17-4060-91b6-dd72878cb004)

```js
var globalOne = 16;
function testingScope() {
  var localOne = 12;
  console.log(localOne); // 12
  console.log(globalOne); // 16
}
testingScope(); // 12 and 16
console.log(localOne); // Uncaught ReferenceError: localOne is not defined
console.log(globalOne); // 16
```

```js
const nameG = "GeeksforGeeks";
function intoMySelf(greet) {
  const audience = "Everyone";
  function introduce() {
    console.log(`${greet} ${audience}, This is ${nameG} learning`);
  }
  introduce();
}
intoMySelf("Hello");
```

```
Result : Hello Everyone, This is GeeksforGeeks learning
```

Since our variable globalOne is a global variable, and we can access it anywhere. However, the localOne variable is only accessible inside its scope. That’s why if we call the testingScope function, we can see both variables in the console.

Reference : https://levelup.gitconnected.com/javascript-fundamentals-local-scope-5841690ea6aa

### 2. Global Scope

Global Scope is everything outside the boundaries (outside the box). A global scope cannot access a variable defined in the local scope. A variable declared outside a function, becomes GLOBAL. Global variables can be accessed from anywhere in a JavaScript program. Variables declared with var, let and const are quite similar when declared outside a block.

```js
let carName = "Volvo";
function carInfo() {
  console.log(carName);
}
carInfo();
```

### 3. Block Scope

This tells us that any variable declared inside a block ({}) can be accessed only inside that block.  
Variables declared inside a { } block cannot be accessed from outside the block:
A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.

_Block scope is related to variables declared with `let` and `const` only. <br/>
<span style="color:red;font-weight:bold">Variables declared with `var` do not have block scope</span>._

1. <b>var</b> is called as <b>function scope</b> that is if a variable is declared using var keyword it will be accessible throughout the function.

2. <b>let & const</b> are also called as <b>block scope</b> that is they are accessible within that particular block.

```js
{
  let a = 3;
  var b = 2;
  console.log(a);
  console.log(b);
  // let a = "Mainul Hasan" // Cannot redeclare block-scoped variable 'a'.
  a = "67"; // But can be reassigned value with different type
  var b = 5;
  console.log(a);
}
console.log(b); // declared with var so we can access outside of block and reassigned
//console.log(a); // ReferenceError: a is not defined
//console.log(b); // 2 as variables declared with var is functionally and globally scoped Not Block scoped
function hello() {
  if (true) {
    var a = "Javascript";
    let p = "C++";
    const c = "Python";
    console.log(a); // Javascript
    console.log(p); // C++
    console.log(c); // Python
  }
  console.log("Outside If statement"); // Outside If statement
  console.log(a); // Javascript
  console.log(p); //ReferenceError: p is not defined
  console.log(c); // ReferenceError: c is not defined
}
hello();
```

Reference : https://medium.com/nerd-for-tech/function-scope-block-scope-in-js-d29c8e7cd216

## Difference Between LocalVariable and Global Variable

In the global scope, we can only access global variables, which are stored in the window object. Unlike global variables, local variables are not accessible and are destroyed as soon as their scope ends. They stay in memory when their function is called and are gone once it finishes. That’s why they are only accessible during the execution of their function. That is one of the key differences between global and local variables.

Reference : https://levelup.gitconnected.com/javascript-fundamentals-local-scope-5841690ea6aa
