## JavaScript Variables
Variables are Containers for Storing Data

JavaScript Variables can be declared in 4 ways:

1. Automatically
2. Using var
3. Using let
4. Using const

In this first example, x, y, and z are undeclared variables.

```js
x = 5;
y = 6;
z = x + y;
console.log(z);
y="mainul"
console.log(y);

// using var
var x = 50;
var y = 6;
var z = x + y;
console.log(z);

// let
let a = 5;
let b = 6;
let c = a + b;
console.log(c);

const p = 5;
const q = 6;
const r = p + q;
console.log(r);

/*
    Var,Let and Const
*/

// var keyword 
var f = 10
var f = 20 // can be redeclared
    f = 30 // can be reassigned
console.log(f);

var u = 2
{
    var u = 10;
    console.log(u); // 10
}
console.log(u); // 10


//Variables defined with let cannot be Redeclared
//let m = 8
//let m = 10 // cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope
let w = 90
{
    let w = 100;
    console.log(w); // 100
}
console.log(w); // 90

// Const 
/*
Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
*/

const tt = 89
const tt = 58 //cannot be Redeclared
    tt = 89 // cannot be Reassigned

// Block Scope
const pp = "mainul"
{
    const pp ="Hasan" // Block Scope
    console.log(pp); // Hasan
}
console.log(pp); // Mainul


```

### When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

## Good or Bad ??

1. let and const have block scope.

2. let and const can not be redeclared.

3. let and const must be declared before use.

4. let and const does not bind to this.

5. let and const are not hoisted.

## When to use JavaScript const?

<b>Always declare a variable with const when you know that the value should not be changed.</b>
1. A new Array
2. A new Object
3. A new Function
4. A new RegExp

## Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object

But you CAN:

    Change the elements of constant array
    Change the properties of constant object


### Constant Arrays
```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

But you can NOT reassign the array:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

### Constant Objects

You can change the properties of a constant object:
```js
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

But you can NOT reassign the object:
```js
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

```


## Variable declaration Rules

1. Names can contain letters, digits, underscores, and dollar signs.

2. Names must begin with a letter.

3. Names can also begin with $ and _ (but we will not use it in this tutorial).

4. Names are case sensitive (y and Y are different variables).

5. Reserved words (like JavaScript keywords) cannot be used as names.

## One Statement, Many Variables

```
let person = "John Doe", carName = "Volvo", price = 200;
```

## Chart

![var-let-const-cheatsheet](https://github.com/maainul/FullStackThings/assets/37740006/c9980375-d71b-466d-ad48-2d9783814dd7)
