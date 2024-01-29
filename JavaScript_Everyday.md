<hr/>

# 2. Variable,Let,Const&Data Types

## JavaScript Variables
Variables are Containers for Storing Data

JavaScript Variables can be declared in 4 ways:

- Automatically
- Using <b>var</b>
- Using <b>let </b>
- Using <b>const </b>

#### Automatically
```js
x = 5;
y = 6;
z = x + y;
```

The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.

#### Let Example :
```js
let x = 5;
let y = 6;
let z = x + y;
```
#### Const Example :
```js
const x = 5;
const y = 6;
const z = x + y;
```
#### Mixed Example :
```js
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

It is considered good programming practice to always declare variables before use.

## JavaScript Identifiers

All JavaScript variables must be identified with unique names.
These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).


The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
- JavaScript identifiers are case-sensitive.

#### One Statement, Many Variables
```js
let person = "John Doe", carName = "Volvo", price = 200;
```
A declaration can span multiple lines:
```js
let person = "John Doe",
carName = "Volvo",
price = 200;
```
### JavaScript Underscore (_)
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
```js
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

<hr/>

## JavaScript Let & Const

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

<hr/>

## JavaScript Data Types

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype

The object data type can contain:
1. An object
2. An array
3. A date

```js
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

A JavaScript variable can hold any type of data.

## JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
```
#### JavaScript Numbers
All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:
```js
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
```

Javascript numbers are always one type:
double (64-bit floating point).

All JavaScript numbers are stored in a a 64-bit floating-point format.

### typeof Operator
```js
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
```
### Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
```js
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
```

### Empty Values
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.
```js
let car = "";    // The value is "", the typeof is "string"
```


<hr>

# 3. Booleans

## JavaScript Booleans

A JavaScript Boolean represents one of two values: true or false.

### The Boolean() Function

You can use the Boolean() function to find out if an expression (or a variable) is true:

```js
Boolean(10 > 9)
// or even easier
(10 > 9)
10 > 9
```
### Everything With a "Value" is True
```js
Boolean(100)  // true
Boolean(3.14)  // true
Boolean(-15) // true
Boolean("Hello") // true
Boolean('false') // true
Boolean(1 + 7 + 3.14) // true
```
### Everything Without a "Value" is False
```js
let x = -0;
Boolean(x); // false
let x = "";
Boolean(x); // false
let x;
Boolean(x); // false
let x = null;
Boolean(x); // false
let x = false;
Boolean(x); // false
let x = 10 / "Hallo"; // NaN
Boolean(x); // false
```
### JavaScript Booleans as Objects

Normally JavaScript booleans are primitive values created from literals:
```js
let x = false;
```
But booleans can also be defined as objects with the keyword new:
```js
let y = new Boolean(false);
```

```js
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
```

Do not create Boolean objects.

The new keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results:

<hr>

# 4.Numbers

## JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.
```js
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```
Extra large or extra small numbers can be written with scientific (exponent) notation:
```js
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```

## JavaScript Numbers are Always 64-bit Floating Point

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

### Integer Precision 
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
```js
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```
The maximum number of decimals is 17.
```js
let precisionExample = 0.123456789012345678; // 18 decimal digits
console.log(precisionExample); // Outputs: 0.12345678901234568
```
In this example, the number 0.123456789012345678 has 18 decimal digits, but due to the limitations of double-precision floating-point representation, it gets rounded to 0.12345678901234568 when printed.

#### How to solve the Problem ?

It's essential to be aware of these limitations when working with decimal numbers in JavaScript. If you need higher precision, especially for financial calculations or other situations where accuracy is crucial, you might consider using libraries like BigDecimal or Decimal.js that provide arbitrary precision arithmetic.

### Floating Precision

Floating point arithmetic is not always 100% accurate:

```js
let x = 0.2 + 0.1; // 0.2 + 0.1 = 0.30000000000000004
```
To solve the problem above, it helps to multiply and divide:
```js
let x = (0.2 * 10 + 0.1 * 10) / 10; //  0.3
```
### NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

```js
let x = 100 / "Apple"; // NaN
```
## JS BigInt

JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

To create a BigInt, append n to the end of an integer or call BigInt():
```js
let x = 9999999999999999;
let y = 9999999999999999n;
```

```js
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
```
```js
let x = BigInt(999999999999999);
let type = typeof x; // bigint
```
Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

### New Number Methods

Number.isInteger()

Number.isSafeInteger()

let x = Number.MAX_VALUE;
let x = Number.MIN_VALUE;
let x = Number.MAX_SAFE_INTEGER;
let x = Number.MIN_SAFE_INTEGER;

<hr>

# 5.Operators,Assignments,Arithmetic & Math


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

| Operator | Example |   Same As |
| -------- | :-----: | --------: |
| =        |  x =y   |     x = y |
| +=       |  x +=y  | x = x + y |
| -=       |  x -=y  | x = x - y |
| *=       |  x *=y  | x = x * y |
| /=       |  x /=y  | x = x / y |
| /=       |  x %=y  | x = x % y |
| **=      | x **=y  | x = x** y |

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

<hr>

## JavaScript Math Object

The JavaScript Math object allows you to perform mathematical tasks on numbers.

### The Math Object

Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

### Math Properties (Constants)

```js
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```

### Number to Integer
There are 4 common methods to round a number to an integer:

```js
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
```

#### Math.round() : (Normal Decimal Rule)
```js
Math.round(4.6); //5
Math.round(4.5); //5
Math.round(4.4); // 4

```
#### Math.ceil() : (jodi decimal  chole jai tahole 1 jog hobe . minus a chole gele minus baad)
```js
Math.ceil(4.9);  // 5
Math.ceil(4.7); // 5
Math.ceil(4.4); // 5
Math.ceil(4.2); // 5
Math.ceil(-4.2); // -4
```

#### Math.floor() : Decimal baad
```js
Math.floor(4.9); // 4
Math.floor(4.7); // 4
Math.floor(4.4); // 4
Math.floor(4.2); // 4
Math.floor(-4.2); // 5 (minus hole 1 jog kore nite hobe)
```
#### Math.trunc() : returns the integer part of x
```js
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
```
#### Math.min() and Math.max() : Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

```js
Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);
```
#### Math.random()
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
```js
Math.random();
```
<hr/>

# 6.Strings

## Lesson 6.1 - Strings

### JavaScript Strings

Strings are for storing text

Strings are written with quotes

```js
let text = "John Doe";
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

```
Strings created with single or double quotes works the same.

There is no difference between the two.

### Template Strings

Templates were introduced with ES6 (JavaScript 2016).

Templates are strings enclosed in backticks (`This is a template string`).

Templates allow single and double quotes inside a string:

```js
let text = `He's often called "Johnny"`;
```
### String Length
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // 26
```

### JavaScript Strings as Objects
Normally, JavaScript strings are primitive values, created from literals:

```js
let x = "John";
let y = new String("John");
let x = "John";
let y = new String("John");
```
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

```js
let x = new String("John");
let y = new String("John");
// false
// JavaScript objects cannot be compared.
```
Comparing two JavaScript objects always returns false.

## Lesson 6.2 - String Methods
Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.
***
String length<br>
String charAt()<br>
String charCodeAt()<br>
String at()<br>
String [ ]<br>
String slice()<br>
String substring()<br>
String substr()<br>
String toUpperCase()<br>
String toLowerCase()<br>
String concat()<br>
String trim()<br>
String trimStart()<br>
String trimEnd()<br>
String padStart()<br>
String padEnd()<br>
String repeat()<br>
String replace()<br>
String replaceAll()<br>
String split()<br>
***
### String length:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```
## Extracting String Characters : 4 methods
### String charAt():
```js
let text = "HELLO WORLD";
let char = text.charAt(0); // H
```
### String charCodeAt(): The method returns a UTF-16 code (an integer between 0 and 65535).
```JS
let text = "HELLO WORLD";
let char = text.charCodeAt(0); // 72
```
```JS
const name = "W3Schools";
let letter = name.at(2); // s // get third letter

const name = "W3Schools";
let letter = name[2]; // get third letter
```
## Extracting String Parts : 3 methods 
- slice(start, end)
- substring(start, end)
- substr(start, length)

### String slice() : slice() extracts a part of a string and returns the extracted part in a new string.
```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Banana
let text = "Apple, Banana, Kiwi";
let part = text.slice(7); // Banana, Kiwi
// If a parameter is negative, the position is counted from the end of the string:
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12); // Banana, Kiwi
// This example slices out a portion of a string from position -12 to position -6:
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6); // Banana
```
###  String substring() : substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); // Banana
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); // 
```
### String substr() :
```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
// If you omit the second parameter, substr() will slice out the rest of the string.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
// If the first parameter is negative, the position counts from the end of the string.
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
```
### String toUpperCase():
```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //  HELLO WORLD!
```
### String toLowerCase()
```js
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower // hello world!
```
## Reference For Button CLick

```html
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript String Methods</h1>
<p>Convert string to lower case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toLowerCase();
}
</script>

</body>
</html>

```

### String concat() : concat() joins two or more strings:
```js
let text1 = "Hello";
let text2 = "World";

let text3 = text1.concat(" ", text2); // Hello World!

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
```
### String trim() : The trim() method removes whitespace from both sides of a string:
```js
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```
### String trimStart() :  The trimStart() method works like trim(), but removes whitespace only from the start of a string.
```js
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
```
### String trimEnd() : The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
```js
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
```
### String repeat() : 
```js
let text = "Hello world!";
let result = text.repeat(2);

let text = "Hello world!";
let result = text.repeat(4);
```

### String replace() :
```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

```
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

### String replaceALl() : 
```js
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
// I love dogs. Dogs are very easy to love. Dogs are very popular.
```

## Converting a String to an Array

### String split() : 
```js
let text = "a,b,c,d,e,f";
const myArray = text.split(","); // a

let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}

```
## Lesson 6.3 - String Search

### String indexOf() : The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); // 7

// Both methods accept a second parameter as the starting position for the search:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);

```
### String lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate"); // 21
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);
``` 
### String search() : The search() method searches a string for a string (or a regular expression) and returns the position of the match
```js
let text = "Please locate where 'locate' occurs!";
text.search("locate");
```

### String match() :
```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); // 3 ain,ain,ain

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi); // 4 ain,AIN,ain,ain

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/); // 1 ain

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");  // 1 ain
```
### String matchAll() :
```js
const iterator = text.matchAll("Cats");
const iterator = text.matchAll(/Cats/gi); // Case-sencetive
```
### String includes() :
```js
let text = "Hello world, welcome to the universe.";
text.includes("world");
let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
```
### String startsWith() :
```js
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
let text = "Hello world, welcome to the universe.";
text.startsWith("world")
// A start position for the search can be specified:
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)

```
### String endsWith() :
```js
let text = "John Doe";
text.endsWith("Doe");

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
```

## Lesson 6.4 - String Templates
```js
let text = `Hello World!`;
let text =
`The quick
brown fox
jumps over
the lazy dog`;

let firstName = "John";
let lastName = "Doe";

let text2 = `Welcome ${firstName}, ${lastName}!`;

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

```
<hr/>

# 7. Arrays

## 7.1 . JavaScript Arrays

An array is a special variable, which can hold more than one value:

```js
const cars = ["Saab", "Volvo", "BMW"];
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
const cars = new Array("Saab", "Volvo", "BMW");

```
The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```
## Converting an Array to a String

The JavaScript method toString() converts an array to a string of (comma separated) array values.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```
##  JavaScript Array Methods

Basic Array Methods

Array length<br>
Array toString()<br>
Array at()<br>
Array join()<br>
Array pop()<br>
Array push()<br>
Array shift()<br>
Array unshift()<br>
Array delete()<br>
Array concat()<br>
Array copyWithin()<br>
Array flat()<br>
Array splice()<br>
Array toSpliced()<br>
Array slice()<br>


```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift(); // Remove From First (Banana)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Add Frist

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // ["Cecilie", "Lone","Emil", "Tobias", "Linus"]

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3); // [Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan]
```

### Array copyWithin() : 
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // 
```
### Flattening an Array

Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

### JavaScript Array flat()
The flat() method creates a new array with sub-array elements concatenated to a specified depth.
```js
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // 1,2,3,4,5,6
```

### Splicing and Slicing Arrays

The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

### JavaScript Array splice()
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // ["Banana", "Orange","Lemon", "Kiwi","Apple", "Mango"];
``` 
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); // ["Banana", "Orange", "Lemon", "Kiwi"];
```
### Using splice() to Remove Elements 

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Banana
```
### JavaScript Array slice()

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // ["Orange", "Lemon", "Apple", "Mango"]

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3); // Apple,Mango

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3); // Orange,Lemon

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2); // Lemon,Apple,Mango
```
## JavaScript Array Search

```js

```