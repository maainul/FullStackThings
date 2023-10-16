## Asynce 
async and await make promises easier to write.

async makes a function return a promise

await makes a function wait for a promise

The async keyword before a function makes the function return a promise.

```js
async function myFunction(){
    return "Hello";
}
```
Is the same as
```js
function myFunction(){
    return Promise.resolve("Hello");
}
```
Here is how to use the Promise
```js
myFunction().then(
    function(value){
        // Code if successful
    }
    function(error){
        // Code if some error
    }
);

```
```js
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```


