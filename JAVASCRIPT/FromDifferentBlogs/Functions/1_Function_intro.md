### Declare a function
```js
function functionName(parameters){
    // funciton body
}
```
### Function real Example
```js
function say(message){
    console.log(message);
}
```
### Calling a function
```js
function(argument);
```
```js
say('Hi');
```
### Parameters vs. Arguments
Parameter : When declaring a function we specify parameters.
```js
function say(msg){

}
// here message is parameter
```
Argument: When Calling a function we pass argument.
```js
say('Hi')
// here hi is argument
```
### Returning a value
Every function in javascript implicitly returns undefined. unless you explicitly spefify a return value.
```js
function say(message){
    console.log(message);
}

let result = say('Hello');
console.log('Result', result);

```
Output

    Hello
    Result : undefined

### Let's Return Value

```js
function add(a,b){
    return a + b;
}

let sum = add(10,20);
console.log('Sum = ', sum)
```
Output
    
    Sum = 30

### The arguments object
Inside a function, you can access an object called arguments that represents the named arguments of the function.

```js
function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
}

console.log(add(1,2)) // 3
console.log(add(1,2,3,4,5)) // 15

```