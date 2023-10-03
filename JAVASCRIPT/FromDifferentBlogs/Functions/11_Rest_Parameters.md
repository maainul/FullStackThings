### Introduction 
A rest parameter has a prefix of three dots(...).A rest parameter allows you to represent an indefinite number of arguments as an array.

```js
function fn(a,b,...args){
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
fn(1,2);
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
function sum(...args){
    let total = 0;
    for(const a of args){
        total += a;
    }
    return total;
}
sum(1,2,3);
```
Output

    6

An arrow function does not have the arguments object. Therefore, if you want to pass some arguments to the arrow function, you must use the rest parameters. See the following example:

