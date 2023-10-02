### Intro
An anonymous function is a function without a name.
```js
(function (){
    // logic
});
```
### Example 1
```js
let show = function(){
    cosole.log('Anonymous function ');
}

show();

```

### Arrow Functions
```js
let show = function (){
    console.log('Normal function')
};

// annonymous function
 let show = () =>{
    console.log('Anonymous function ');
 }

// 
let add = function (a,b){
    return a + b ;
}
// arrow function 
let add = (a, b) = > a + b;

```