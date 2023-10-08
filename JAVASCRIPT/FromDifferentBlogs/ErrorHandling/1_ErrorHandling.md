### JavaScript try…catch
The following example attempts to call the add() function that doesn’t exist:

```js
let result = add(10,20);
console.log(result);
cosole.log('Bye');

```
And the JavaScript engine issues the following error:

```js
Uncaught TypeError : add is not a function
```
The error message states that the add is not a function and the error type is TypeError.
When the JavaScript engine encounters an error, it issues that error and immediately terminates the execution of the entire script. In the above example, the code execution stops at the first line.

Sometimes, you want to handle the error and continue the execution. To do that, you use the try...catch statement with the following syntax:
```js
try{
    // code may cause error
}catch(error){
    // code to handle error
}
```
In this syntax:

First, place the code that may cause an error in the try block.
Second, implement the logic to handle the error in the catch block.
If an error occurs in the try block, the JavaScript engine immediately executes the code in the catch block. Also, the JavaScript engine provides you with an error object that contains detailed information about the error.

Basically, the error object has at least two properties:

1. name specifies the error name.
2. message explains the error in detail.

If no error occurs in the try block, the JavaScript engine ignores the catch block.

It’s a good practice to place only the code that may cause an exception in the try block.
```js
try{
    let result = add(10,20);
    console.log(result);
}catch(e){
    console.log({name:e.name, message: e.message});
}
console.log('Bye');
```
Output 
```js
{ name: 'ReferenceError', message: 'add is not defined' }
Bye
```
### Ignore the catch block
The following example defines the add() function that returns the sum of two argument
```js
const add = (x,y) => x + y;
try{
    let result = add(10,20);
    console.log(result);
}catch(e){
    console.log({name:e.name, message: e.message});
}
console.log('Bye');
```
Output

```js
30
Bye
```
In this example, no error occurs because the add() function exists. Therefore, the JavaScript engine skips the catch block.

For example, the following uses the try…catch statement without the exception variable:
```js
const isValidJSON = (str) =>{
    try{
        JSON.parse(str);
        return true;
    }catch{
        return false;
    }
}
let valid = isValidJSON(`{"language":"Javascript"}`);
console.log(valid);

```
How it works.

First, define the isValidJSON() function that accepts a string and returns true if that string is a valid JSON or false otherwise.

To validate JSON, the isValidJSON() function uses the JSON.parse() method and try...catch statement.

The JSON.parse() method parses a JSON string and returns an object. If the input string is not valid JSON, the JSON.parse() throws an exception.

If no exception occurs, the function returns true in the try block. Otherwise, it returns false in the catch block.

Second, call the isValidJSON() function and pass a JSON string into it:

let valid = isValidJSON(`{"language":"JavaScript"}`);
Code language: JavaScript (javascript)
Since the input string is valid JSON format, the function returns true.

Third, output the result to the console:

```js
console.log(valid);
```
### try…catch…finally
The try...catch statement allows you to catch exceptions and handle them gracefully. Sometimes, you want to execute a block whether exceptions occur or not. In this case, you can use the try...catch...finally statement with the following syntax:
```js
try {
  // code may cause exceptions
} catch (error) {
  // code to handle exceptions
} finally {
  // code to execute whether exceptions occur or not
}
```
### Example:
```js
let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}
```
Output
```js
add is not defined
{ result: 0 }
```
How it works.

First, declare the result variable and initialize its value with 0.

```js
let result = 0;
```

Code language: JavaScript (javascript)
Second, call the add() function and assign the return value to the result variable in the try block. Because the add() function does not exist, the JavaScript engine raises an exception.

Because of the exception, the statement in the catch block executes to show the error message.

Third, output the result to the console in the try block.

In the following example, we define the add() function and call it in the try block:

```js
const add = (x, y) => x + y;

let result = 0;

try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result }); // { result: 30 }
}
```
Because the add() function exists, no exception occurs in the try block. Therefore, the finally block outputs the value of the result variable, which is the sum of 10 and 20.

In both examples, the finally block always runs.

### try…catch…finally and return
```js
function fn() {
  try {
    return 1;
  } catch {
    return 2;
  } finally {
    return 3; // 3
  }
}

console.log(fn());

```

In this example, the return statement in the try block returns 1. Hence, the fn() function should have returned 1. However, it is not the case.

Because the finally block always executes, the return statement in the finally block returns 3. Therefore, the fn() function returns 3.

In other words, the return statements in the try and catch blocks are ignored in the try...catch...finally statement.

### Throw Exception
The throw statement allows you to throw an exception. Here’s the syntax of the throw statement:
```JS
throw expression;
```
### 1) Using the JavaScript throw statement to throw an exception
```js
function add(x,y){
    if(typeof x !== 'number'){
        thow 'The first argument must be a number'
    }
    if(typeof y !== 'number'){
        throw 'The second argument must be a number'
    }

    return x + y;
}
const result = add('a',10);
console.log(result); // Uncaught The first argument must be a number

```
To handle the exception, you can use the try...catch statement. For example:
```js
function add(x, y) {
  if (typeof x !== 'number') {
    throw 'The first argument must be a number';
  }
  if (typeof y !== 'number') {
    throw 'The second argument must be a number';
  }

  return x + y;
}

try {
  const result = add('a', 10);
  console.log(result);
} catch (e) {
  console.log(e);
}
```
In this example, we place the call to the add() function in a try block. Because the expression in the throw statement is a string, the exception in the catch block is a string as shown in the output.

### 2) Using JavaScript throw statement to throw an instance of the Error class
In the following example, we throw an instance of the Error class rather than a string in the add() function;
```js
function add(x, y) {
  if (typeof x !== 'number') {
    throw new Error('The first argument must be a number');
  }
  if (typeof y !== 'number') {
    throw new Error('The second argument must be a number');
  }

  return x + y;
}

try {
  const result = add('a', 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ':', e.message);
}
```
Output 

```js
Error : The first argument must be a number
```
### 3) Using JavaScript throw statement to throw a user-defined exception
Sometimes, you want to throw a custom error rather than the built-in Error. To do that, you can define a custom error class that extends the Error class and throw a new instance of that class. For example:

First, define the NumberError that extends the Error class:

```js
class NumberError extends Error{
    constructor(value){
        super(` "${value}" is not a valid number`);
        this.name = 'InvalidNumber';
    }
}

```
The constructor() of the NumberError class accepts a value that you’ll pass into it when creating a new instance of the class.

In the constructor() of the NumberError class, we call the constructor of the Error class via the super and pass a string to it. Also, we override the name of the error to the literal string NumberError. If we don’t do this, the name of the NumberError will be Error.

Second, use the NumberError class in the add() function

```js

function add(x, y) {
  if (typeof x !== 'number') {
    throw new NumberError(x);
  }
  if (typeof y !== 'number') {
    throw new NumberError(y);
  }

  return x + y;
}

```
In the add() function, we throw an instance of the NumberError class if the argument is not a valid number.

Third, catch the exception thrown by the add() function:
```js
try {
  const result = add('a', 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ':', e.message);
}
```
Output

```js
InvalidNumber : "a" is not a valid number
```