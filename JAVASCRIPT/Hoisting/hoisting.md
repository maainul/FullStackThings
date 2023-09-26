## Hoisting
a variable can be used before it has been declared.


```js
function sumFunc(a,b){
    return a + b;
}

const sumConst = (a,b) => a + b;

console.log(`sumFunc(1,2) => ${sumFunc(1,2)}`); // sumFunc(1,2) => 3
console.log(`sunConst(3,4) => ${sumConst(3,4)}`); // sunConst(3,4) => 7

```
What js do. it automatically declare function top of the file. and then start to execute. so if we put sumFunc() bottom of the console.log() then it will automatically go to the top.so it will run file.that is hoisting.we can call function before declaring it.

```js
const sumConst = (a,b) => a + b;

console.log(`sumFunc(1,2) => ${sumFunc(1,2)}`); // sumFunc(1,2) => 3
console.log(`sunConst(3,4) => ${sumConst(3,4)}`); // sunConst(3,4) => 7

function sumFunc(a,b){
    return a + b;
}

```
But if we try to access funciton that is declared with const keyword it will give error. <b>ReferenceError: Cannot access 'sumConst' before initialization </b>

### WHy this is happening ? 

Because everytime code is running js automatically organize file . declared with funciton keyword top.but Function with const keyword remain the same place for that reason this code is not working.it will automatically put sumFunc() on top but not sumConst(). 

```js
console.log(`sumFunc(1,2) => ${sumFunc(1,2)}`);    // sumFunc(1,2) => 3
console.log(`sunConst(3,4) => ${sumConst(3,4)}`); // ReferenceError: Cannot access 'sumConst' before initialization

function sumFunc(a,b){
    return a + b;
}
const sumConst = (a,b) => a + b;
```
### Let's Code with var Keyword
```js
var a = 2;
console.log(a); // 2
```
### What happend if we put var after console.log()
```js
console.log(a);
var a = 2;
```

it will give result undefined. because js do like this
```js
var a = undefined
console.log(a); // undefined
a = 2;
``` 
so it is printing undefined.

Hoisting is not applicable for let and const

```js
console.log(aa);// ReferenceError: Cannot access 'aa' before initialization
const aa = 10

console.log(bb); // ReferenceError: Cannot access 'bb' before initialization
let bb = 20
```

### What is the output in this program and why ?
```js
function logVal(){
    console.log(value);
}
let value=180;
logVal(); // 180

```
Technically, let and const are actually hoisted, but they are not initialized with a value 
```

```
In this example function is decleared first but variable declared and initialize second.But still it is not wrong because.Js Read the code first then execute variable, function so. it get like this.

```js
let value=180;
function logVal(){
    console.log(value);
}
logVal(); // 180

```

### Using Const

```js
function logValConst(){
    console.log(val);
}
const val=180;
logValConst(); // 180
```
### Using let

```js
function logValVar(){
    console.log(value);
}
var value=180;
logValVar(); // 180
```

### Using var not in function 

```js
console.log(valuev);
var valuev=180; // undefined
console.log(valuev); // 180
```
```
Because, It initialized first then print value undefined then declared  180 then print 180
```

The undeclared variable is assigned the global scope by javascript. 
```js
function insidefunc(){
    a = 10
    let b = 100
}
insidefunc();
console.log(a) // 10
console.log(b) // ReferenceError : b is not defined

```

### ReferenceError:Cannot access 'name' before initialization
```js
console.log(name); // ReferenceError:Cannot access 'name' before initialization
let name = 'Mukul Latiyan';
```
### What is the Output of this program
```js
function fun(){
    console.log(name);
    let name = 'Mukul Latiyan';
}
fun();
```
Result : ReferenceError: Cannot access 'name' before initialization

```js
function fun(){
    let name;
    console.log(name);
    name = 'Mukul Latiyan';
}
fun(); // undefined
```
Result : undefined

```js
 fun(); // Calling before declaration
     
    function fun(){ // Declaring
        console.log("Function is hoisted");
    }
```
Result : Function is hoisted

```js
fun() // Calling the expression
 
let fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}
```
Result : UncaughtReferenceError : Fun is not defined

```js
fun() // Calling the expression
 
var fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}

```
Result :TypeError: fun is not a function