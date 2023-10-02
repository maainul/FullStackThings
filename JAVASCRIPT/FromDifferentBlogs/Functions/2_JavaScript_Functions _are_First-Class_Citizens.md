### JavaScript Functions are First-Class Citizens

1. <b>store</b> functions in variables, 
2. <b>pass</b> them to other functions as arguments, 
3. <b>return</b> them from other functions as values.

#### Storing functions in variables
```js
function add(a,b){
    return a + b;
}
let sum = add;

```
By doing this, we can have two ways to execute the same function. For example, we can call it normally as follows:
```js
let result = add(10,20);

let result sum(10,20); 
```

#### Passing a function to another function
Because functions are values, you can pass a function as an argument into another function.
```js
function add(a,b){
    return a + b;
}
let sum = add;

function average(a,b,fn){
    return fn(a,b)/2;
}

let result = average(10,20,sum);
console.log(result);
```
Output :

    15

### Example : 2

```js
function greet(){
    return 'Hello';
}

function name(user,func){
    const message = func();
    console.log(`${message} ${user}`);
}
name('Mainul',greet);
name('Hasan',greet);
name('Anik',greet);
name('Kusum',greet);
```

Output 
    
    Hello Mainul
    Hello Hasan
    Hello Anik
    Hello Kusum


<b>Becarefull about this topic</b>

```js
function sayHello(param){
    console.log("Hello", param);
    param();
    return "Hiiii Geeks for Geeks";
}

function smaller(){
    console.log("Is Everything alright");
}

const returnhello = sayHello(smaller)
console.log(returnhello);

```

Output

    hello [Function: smaller]
    Is everything alright
    Hiii Geeks for Geeks

### Example : 3
```js
function geeks_inner(value){
    return 'hello User!'+ value;
}

function geeks_outer(a,func){
    console.log(func(a));
}

geeks_outer('Geeks!',geeks_inner);

```
Output

    hello User!

    


