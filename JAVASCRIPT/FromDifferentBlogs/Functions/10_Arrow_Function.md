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