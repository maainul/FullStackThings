### Closure
In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.


A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created

### Lexical Scoping
```js
let name = 'John'

function greeting(){
    let msg = 'Hi';
    console.log(msg, " "+ name);
}

```
The variable name is a global variable. It is accessible from anywhere including within the greeting() function.
The variable message is a local variable that is accessible only within the greeting() function.

```js
function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John

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