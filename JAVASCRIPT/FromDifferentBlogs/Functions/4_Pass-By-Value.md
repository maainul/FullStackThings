### Pass-By-Value
In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function. In other words, the changes made to the arguments are not reflected outside of the function.

If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript.

```js
function square(x){
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100
console.log(y);      // 10 
```

First, define a square() function that accepts an argument x. The function assigns the square of x to the x argument.

Next, declare the variable y and initialize its value to 10:


Then, pass the y variable into the square() function. When passing the variable y to the square() function, JavaScript copies y value to the x variable.


After that, the square() function changes the x variable. However, it does not impact the value of the y variable because x and y are separate variables.


Finally, the value of the y variable does not change after the square() function completes.


If JavaScript used the pass-by-reference, the variable y would change to 100 after calling the function.