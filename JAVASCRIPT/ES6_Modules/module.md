### Module

ES6 introduced the concept of modules. A module is a JavaScript file that executes in strict mode. It means that any variables or functions declared in the module won’t be added automatically to the global scope.

The good news is that modern web browsers and Node.js support native ES6 modules. This native support streamlines module loading and optimizes performance.

### ES6 modules example

We'll create a new project with the following directory and file structure

    index.html
    js
        index.js
        lib,js

First define a function called display() in the lib.js module

```js
function display(message){
    const el = document.createElement('div');
    el.innerText = message;
    document.body.appendChild(el)'
}
```

The display() function display a message on the web page by creating a div element and appending it to the body element.
second, load the index.js file in the index.html file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ES6 Modules</title>
  </head>
  <body>
    <script src="js/index.js"></script>
    </body>
</html>
```
To use the display() function of the lib.js file in the index.js file, you use ES6 modules. The following steps illustrate how to accomplish it:

```js
function display(message) {
  const el = document.createElement('div');
  el.innerText = message;
  document.body.appendChild(el);
}

export { display };
```
In this example, we place the function name display inside curly braces after the export keyword. This allows the display function to be used in other modules.

Step 2. Import the display function from the lib.js module using the import statement and call the display() function to show the Hi message on the webpage:

```js
import { display } from './lib.js';

display('Hi');
```
In this example, we place the display function name that we want to import inside the curly braces and specify the module name from which we want to import (lib.js).

Step 3. Add the type="module" to the script tag in the index.html to instruct the web browser to load the index.js file as a module:

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ES6 Modules</title>
    </head>
    <body>

        <script src="js/index.js" type="module"></script>
    </body>
</html>
```
If you open the index.html in the web browser, you’ll see the Hi message on the webpage.

### Dynamic Import

```
├── index.html
└── js
   ├── app.js
   └── greeting.js
```
The index.html loads the app.js file from the js directory. The index.html contains a button and displays an alert if the button is clicked:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Dynamic Import</title>
    </head>
    <body>
        <input type="button" value="Click Me" class="btn">
        <script src="js/app.js" type="module"></script>
    </body>
</html>
```
The greeting.js module defines a sayHi() function and exports it using a named export:
```js
export function sayHi() {
  alert('Hi');
}
```
The app.js module imports the sayHi function from the greeting.js module. It selects the button with the class .btn and calls the sayHi() function when the button is clicked:

```js
import sayHi from './greeting.js';

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  sayHi();
});

```
The following illustrates how to load the greeting.js module dynamically from the app.js module using the import() syntax:
```js
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  import('./greeting.js')
    .then((greeting) => {
      greeting.sayHi();
    })
    .catch((error) => {
      console.error(error);
    });
});

```
Since the import() returns a Promise, you can use the async/await in the app.js module like this:
```js
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    let greeting = await import('./greeting.js');
    greeting.sayHi();
  } catch (error) {
    console.log(error);
  }
});
```
