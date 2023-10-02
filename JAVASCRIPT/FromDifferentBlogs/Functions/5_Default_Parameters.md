### Default Parameters
In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

```js
function say(message='Hi'){
    console.log(message);
}
say();
say('Hello');

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(add());
```
