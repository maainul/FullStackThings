# JavaScript Let

1. let introduce in 2015(ES6)
2. let 
{
    - Block Scope,
    - Must be declared before use, 
    - can not be redeclared in the same scope

    }
```js
// Must be declared before use 
let x = "John"
let x = 0;
// after compile it will give this error : 
SyntaxError: Identifier 'x' has already been declared
```
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
// X can be used here
```
11. With var we can do this
```js
var x = "john"
var x = 0
```
12. Redeclaring a variable using the var can be impose problems
13. Redeclaring a variable inside a block will also redeclare the variable outside the block
```js
var x = 10;
{
    var x = 2
}
// Here x is 2
```
14. Redeclaring a variable using the let can solve this problem
```js
let x = 10
{
    let x = 2
}
// Here x = 10
```
## Let and Const Info
- Let and Const Have Block Scope
- Let and Const can not be redeclared
- let and const must be declared before use
- let and const does not bind to this
- let and const are not hoisted (Meaning: Using a let variable before it is declared will result in a ReferenceError:)
```js
carName = "Volbo"
let carName ="BMW"
```
15. var does not have to be declared
16. var is hoisted (Meaning: You can use the variable before it is declared)
```js
carName = 'Volbo'
var carName
```
17. var binds to this
18. A variable declared with const keyword cannot be reassigned
```js
const PI = 3.1416
PI = 3.1415 // TypeError: Assignment to constant variable.
```
19. Javascript const variables must be assigned a value when they are declared:
```js
const PI;
PI = 3.1416 // SyntaxError: Missing initializer in const declaration
```
20. Always declared a variable with const when value should not be changed
21. use const when

    {

        a new array,
        a new object,
        a new function,
        a new RegExp
    }

22. The keyword const is a little misleading. It does not define a constant value.It defines a const reference to a value
23. Because of this you can NOT:
    - Reassign a const value
    - Reassign a const array
    - Reassign a const object
24. But You Can
    - Change the elements of const array
    - Change the properties of const object
25. Const array example
```js
const cars = ["sab","volvo","BMW"]
cars[0] ="Toyota"
cars.push("Audi")
cars = ["Toyota","volvo","Audi"] // Error
```
26. Const Object
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
## Operators
Types of JavaScript Operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators

### Assignment Operators :

| Operator|Example| Same As |
|---------|:-----:|--------:|
| =       | x =y  |  x = y  |
| +=      | x +=y |x = x + y|
| -=      | x -=y |x = x - y|
| *=      | x *=y |x = x * y|
| /=      | x /=y |x = x / y|
| /=      | x %=y |x = x % y|
|**=      |x **=y |x = x** y|

### Comparison Operators :
== equal to

=== equal value and equal type

!= not equal

!== not equal value or not equal type

### String Operators :
All the comparison operators above can also be used on strings:
```js
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result) // true
```
```js
let text1 = "What a very ";
text1 += "nice day";
// What a very nice day
```
28. Adding two numbers, will return the sum, but adding a number and a string will return a string:
```js
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
// 10
// 55
// Hello5
```
### JavaScript Logical Operators :

&& - and 

|| or 

! not
### JavaScript Type Operators

typeof ---> Returns type of a variable

instanceof ---> Returns true if an object is an instance of an object type

### Operator Precedence
```js
let x = 100 + 50 * 3
```
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses.

When using parentheses, the operations inside the parentheses are computed first:
```js
let x = (100 + 50) * 3;
```
When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

```js
let x = 100 + 50 - 3;
let x = 100 / 50 * 3;
```
#### Left Shift Assignment Operator

#### Right Shift Assignment Operator

#### Unsigned Right Shift Assignment Operator 

#### Bitwise AND Assignment Operator

#### Bitwise OR Assignment Operator

#### Bitwise XOR Assignment Operator 

#### Logical AND assignment operator 

#### Logical OR assignment operator 

#### Nullish coalescing assignment operator 