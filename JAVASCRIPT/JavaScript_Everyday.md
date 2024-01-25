# JavaScript Let

1. let introduce in 2016(ES6)
2. let {
    Block Scope,
    Must be declared before use,
    can not be redeclared in the same scope
}

3. Before ES6(2015) Javascript did not have Block scope
4. Javascript have Global and Functional Scope
5. ES6 Introduce two new Javascript keyword : let and const
6. These two new keyword provide block scope in javascript
7. variable declared inside a {} block can not be accessed from outside of the block
```js
{
    let x = 2
}

// x can Not be used here
```
8. Variable declared with the var always have Global Scope
9. Variable declared with the var keyword can not have block scope
10. Variable declared with var inside a {} block can be accessed from outside the block

```js
var x = 2;
```
// X can be used here
11. Variable defined with let can not be redeclared.
12. With let we can not do this
```js
let x = "John"
let x = 0;
// after compile it will give this error : 
SyntaxError: Identifier 'x' has already been declared
```
13. With var we can do this
```js
var x = "john"
var x = 0
```
14. Redeclaring a variable using the var can be impose problems
15. Redeclaring a variable inside a block will also redeclare the variable outside the block
```js
var x = 10;
{
    var x = 2
}
// Here x is 2
```
16. Redeclaring a variable using the let can solve this problem
```js
let x = 10
{
    let x = 2
}
// Here x = 10
```
17. Let and Const Have Block Scope
18. Let and Const can not be redeclared
19. let and const must be declared before use
20. let and const does not bind to this
21. let and const are not hoisted (Meaning: Using a let variable before it is declared will result in a ReferenceError:)
```js
carName = "Volbo"
let carName ="BMW"
```
22. var does not have to be declared
23. var is hoisted (Meaning: You can use the variable before it is declared)
```js
carName = 'Volbo'
var carName
```
24. var binds to this
25. A variable declared with const keyword cannot be reassigned
```js
const PI = 3.1416
PI = 3.1415 // TypeError: Assignment to constant variable.
```
26. Javascript const variables must be assigned a value when they are declared:
```js
const PI;
PI = 3.1416 // SyntaxError: Missing initializer in const declaration
```
27. Always declared a variable with const when value should not be changed
28. use const when

    {

        a new array,
        a new object,
        a new function,
        a new RegExp
    }

29. The keyword const is a little misleading. It does not define a constant value.It defines a const reference to a value
30. Because of this you can NOT:
    - Reassign a const value
    - Reassign a const array
    - Reassign a const object
31. But You Can
    - Change the elements of const array
    - Change the properties of const object
32. Const array example
```js
const cars = ["sab","volvo","BMW"]
cars[0] ="Toyota"
cars.push("Audi")
cars = ["Toyota","volvo","Audi"] // Error
```
33. Const Object
```js
const car = {
    type:"fiat",
    model:"500",
    color:"white"
}
car.color = "red"
car.owner = "Johnson"
car = {
    type:"Volvo",
    model:"EX60",
    color:"red"
} // Error
```
