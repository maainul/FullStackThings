### CallBack Function:
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished


A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.

Why use Callbacks?

Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

Callbacks allow you to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation. This way, you can ensure that the program remains responsive and the user experience is not impacted.

Why use Callbacks?

Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries. If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing. This can lead to a poor user experience, as the program would appear unresponsive.

Callbacks allow you to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation. This way, you can ensure that the program remains responsive and the user experience is not impacted.

Concepts:

Asynchronous programming: Callbacks are used to handle the results of asynchronous operations, which means that the operation does not block the execution of the rest of the program. Instead, the program continues to run and the callback function is executed when the operation is complete.

Non-blocking: Callbacks allow for non-blocking programming, which means that the program does not stop and wait for an operation to complete before continuing to execute. This is important for improving the performance and responsiveness of applications.

Higher-order functions: A higher-order function is a function that takes one or more functions as arguments, or returns a function as a result. The mainFunction in the examples above is a higher-order function because it takes a callback function as an argument.

Anonymous functions: Anonymous functions are functions that are not named and are often used as callbacks. The function passed to setTimeout in the first code example is an anonymous function.

Closure: A closure is a function that has access to variables in its outer scope, even after the outer function has returned. This allows the callback function to access variables and information from the main function, even after the main function has completed its execution.

 understanding these concepts is essential for effectively using callbacks in JavaScript programming

Real-Life Examples:

Loading images on a website: When you load a website, images can take a while to load, especially if they’re large. If images were loaded synchronously, the website would freeze and wait for each image to load before continuing. With callbacks, you can load the images asynchronously, which means that the website continues to load while the images are being loaded in the background.

Handling form submissions: When a user submits a form, it takes time to process the data and send it to the server. If the form submission was executed synchronously, the user would have to wait for the data to be processed and sent before the form can be submitted. With callbacks, you can handle the form submission asynchronously, which means that the user can continue to interact with the form while the data is being processed and sent in the background.

```js
function mainFunction(callback) {
console.log("Performing operation...");
// Use setTimeout to simulate an asynchronous operation
setTimeout(function() {
	callback("Operation complete");
}, 1000);
}

// Define the callback function
function callbackFunction(result) {
console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
//This code is contributed by Veerendra Singh Rajpoot
```

Explanation:

We first define a mainFunction that takes a callback as an argument.

The mainFunction uses setTimeout to simulate an asynchronous operation. The setTimeout function takes two arguments: a callback function and a 
delay time in milliseconds.

The setTimeout function calls the callback function with the result of the operation after the specified delay time.

We then define a callbackFunction that logs the result of the operation.

Finally, we call the mainFunction with the callbackFunction as its argument.

```js
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
console.log("Performing operation...");
// Use Array.forEach to loop through the array of numbers
numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
// This code is contributed by Veerendra Singh Rajpoot
```
output 

    Performing operation...
    Result: 1
    Result: 2
    Result: 3
    Result: 4
    Result: 5

Explanation:

We first define an array of numbers numbers.

We then define a mainFunction that takes a callback as an argument.

The mainFunction uses Array.forEach to loop through the numbers array and call the callback function for each element in the array.

We then define a callbackFunction that logs each number in the numbers array.

Finally, we call the mainFunction with the callbackFunction as its argument.
In conclusion, callbacks are an important aspect of JavaScript programming and are used to handle the results of asynchronous operations in a non-blocking manner. With the help of these examples, you should have a better understanding of how to use callbacks in your own projects.

```js
function display(result){
    console.log(result);
}

function add(num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

add(10,20,display);

function isOdd(number){
    return number % 2 != 0;
}

function isEven(number){
    return number % 2 == 0;
}

function filter(numbers,fn){
    let result = [];
    for(const num of numbers){
        if(fn(num)){
            result.push(num);
        }
    }
    return result;
}
let numbers = [1,2,4,7,3,5,6];
console.log(filter(numbers,isOdd));
console.log(filter(numbers,isEven));

```
Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.