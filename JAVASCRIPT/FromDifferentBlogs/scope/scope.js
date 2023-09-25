/*
The code inside a function has access to:

the function’s arguments.
local variables declared inside the function.
variables declared in its parent function’s scope.
global variables.

*/
// Global and Function Scope
const nameG = "GeeksforGeeks";

function intoMySelf(greet) {
  const audience = "Everyone";
  function introduce() {
    console.log(`${greet} ${audience}, This is ${nameG} learning`);
  }
  introduce();
}
intoMySelf("Hello");

// Block Scope

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
    let p= "C++";
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

