### Syntax

1. whitespace, 
2. statements, 
3. identifiers, 
4. comments, 
5. expressions, 
6. keywords.

### 1. WhiteSpace
Whitespace refers to characters that provide the space between other characters. JavaScript has the following whitespace:

1. Carriage return
2. Space
3. New Line
4. tab

A statement is a code that declares a variable or instructs the JavaScript engine to do a task. A simple statement is terminated by a semicolon (;).
```js
let message = "Welcome to JavaScript";
console.log(message);
```

### 2.Blocks
A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}. For example:
```js
if(window.localStorage){
    console.log('The local storage is supported');
}
```
### 3.Identifiers
An identifier is a name you choose for variables, parameters, functions, classes, etc. An identifier name starts with a letter (a-z, or A-Z), an underscore(_), or a dollar sign ($) and is followed by a sequence of characters including (a-z, A-Z), numbers (0-9), underscores (_), and dollar signs ($).

Note that the letter is not limited to the ASCII character and may include extended ASCII or Unicode though not recommended.

Identifiers are case-sensitive. For example, the message is different from the Message.

### 4.Comments
Comments allow you to add notes or hints to JavaScript code. When executing the code, the JavaScript engine ignores the comments.

JavaScript supports single-line and block comments.

1. Single-line comments : 
A single-line comment starts with two forward-slashes characters (//). A single-line comment makes all the text following the // on the same line into a comment. For example:
// this is a single-line comment

2. Block comments
A delimited comment begins with a forward slash and asterisk /* and ends with the opposite */ as in the following example:
/* This is a block comment
that can span multiple lines */
### Expressions
An expression is a piece of code that evaluates to a value. For example:
2+1

### Summary

Use whitespace including carriage return, space, newline, and tab to format the code. The JavaScript engine ignores the whitespace.

Use a semicolon (;) to terminate a simple statement.

Use the curly braces ({}) to form a block that groups one or more simple statements.

A single-line comment starts with // followed by a text. A block comment begins with /* and ends with */. The JavaScript engine also ignores the comments.

Identifiers are names that you choose for variables, functions, classes, etc.

Do not use the reserved keywords and reserved words for identifiers.

## Variable :
A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

### Declare a variable
```js
var message
let message
message ="Hello"
// Since JavaScript is a dynamically typed language, you can assign a value of a different type to a variable. Although, it is not recommended. For example:
let message = 'Hello';
message = 100;

let message;
console.log(message); // undefined

console.log(counter); // ReferenceError: counter is not defined

// Constants
const workday = 5;
// Once you define a constant, you cannot change its value.

workday = 2;
// Uncaught TypeError: Assignment to constant variable.

```

### Summary

A variable is a label that references a value.

Use the let keyword to declare a variable.

An undefined variable is a variable that has been declared but not initialized while an undeclared variable is a variable that has not been declared.

Use the const keyword to define a readonly reference to a value.

## Data Types

JavaScript has the primitive data types:
1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available from ES2015
7. bigint – available from ES2020
and a complex data type object.
JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types. For example:
```js
let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string
```
To get the current type of the value that the variable stores, you use the typeof operator:
```js
let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"
```
Output
```js
"number"
"boolean"
"string"
```
1. The undefined type :
The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

Consider the following example:

```js
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
```
2. The null type
The null type is the second primitive data type that also has only one value null. For example:
```js
let obj = null;
console.log(typeof obj); // object
```
    The typeof null returns object is a known bug in JavaScript. A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.

JavaScript defines that null is equal to undefined as follows:
```js
console.log(null == undefined); // true
```
3. The number type :

JavaScript uses the number type to represent both integer and floating-point numbers.

The following statement declares a variable and initializes its value with an integer:

```js
let num = 100;
```
To represent a floating-point number, you include a decimal point followed by at least one number. For example:
```js
let price= 12.5; 
let discount = 0.05;
```
Note that JavaScript automatically converts a floating-point number into an integer number if the number appears to be a whole number.

The reason is that Javascript always wants to use less memory since a floating-point value uses twice as much memory as an integer value. For example:
```js
let price = 200.00; // interpreted as an integer 200
```
To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE. For example:
```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```
### NaN
NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN:

    console.log('a'/2); // NaN;

The NaN has two special characteristics:

Any operation with NaN returns NaN.
The NaN does not equal any value, including itself.
```js
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
```
4. The string type
```js
let greeting = 'Hi';
let message  = "Bye";
```

5. The boolean type
```js
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean
```
```js
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
```
5. The object type
In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.

The following example defines an empty object using the object literal syntax:
```js
let emptyobj = {};
```
The following example defines the person object with two properties: firstName and lastName.
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```
A property name of an object can be any string. You can use quotes around the property name if it is not a valid identifier.

For example, if the person object has a property first-name, you must place it in the quotes such as "first-name".

A property of an object can hold an object. For example:
```js
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
```
The contact object has the firstName, lastName, email, phone, and address properties.

The address property itself holds an object that has building,  street, city, state, and country properties.

To access a object’s property, you can use

The dot notation (.)
The array-like notation ([]).
The following example uses the dot notation (.) to access the firstName and lastName properties of the contact object.

```js
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age); // undefined
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'
```
### Numbers
JavaScript uses the number type to represent both integers and floating-point values. Technically, the JavaScript number type uses the IEEE-754 format.

ES2020 introduced a new primitive type bigint representing big integer numbers with values larger than 253 – 1.

```js
let counter = 100; // Integer
let num = 071; // Octal
console.log(num); // 57
// If an octal number contains a number not in the range from 0 to 7, the JavaScript engine ignores the 0 and treats the number as a decimal. For example:
let num = 080; 
console.log(num); // 80
// This implicit behavior might cause issues. Therefore, ES6 introduced a new octal literal that starts with the 0o followed by a sequence of octal digits (from 0 to 7). For example:
et num = 0o71;
console.log(num); // 57
// If you have an invalid number after 0o, JavaScript will issue a syntax error like this:
let num = 0o80;
//          ^^
//SyntaxError: Invalid or unexpected token
// Hexadecimal numbers start with 0x or 0X followed by any number of hexadecimal digits (0 through 9, and a through f). For example:
let num = 0x1a;
console.log(num); // 26
// Floating-point numbers
let price = 9.99;
let tax = 0.08;
let discount = .05; // valid but not recommeded
// When you have a very big number, you can use e-notation. E-notation indicates a number should be multiplied by 10 raised to a given power. For example:
let amount = 3.14e7;
console.log(amount); // 31400000
// The notation 3.14e7 means that take 3.14 and multiply it by 107.
// Likewise, you can use the E-notation to represent a very small number. For example:
let amount = 5e-7; 
console.log(amount); // 0.0000005
// The 5e-7 notation means that take 5 and divide it by 10,000,000.
// Also, JavaScript automatically converts any floating-point number with at least six zeros after the decimal point into e-notation. For example:
let amount = 0.0000005;
console.log(amount); // 5e-7
let amount = 0.2 + 0.1;
console.log(amount); // 0.30000000000000004
let pageView = 9007199254740991n; // Big Integers

```
### numeric separator
```js
const budget = 1000000000;
const budget = 1_000_000_000;
// JavaScript allows you to use numeric separators for both integer and floating-point numbers. For example:
let amount = 120_201_123.05; // 120201123.05
let expense = 123_450; // 123450
let fee = 12345_00; // 1234500
// It’s important to note that all numbers in JavaScript are floating-point numbers.
```
### boolean primitive type
```js
let isPending = false;
let isDone = true;
console.log(typeof(isPending)); //  boolean
console.log(typeof(isDone)); // boolean

let a = Boolean('Hi');
console.log(a); // true
console.log(typeof(a)); // boolean

```
### boolean vs. Boolean
```js
let completed = true;
let active = new Boolean(false);
```
First, active is an object so you can add a property to it:
```js
active.primitiveValue = active.valueOf();
console.log(active.primitiveValue); // false
```
However, you cannot do it with the primitive boolean variable like the completed variable:
```js
completed.name = 'primitive';
console.log(completed.name); // undefined
```
Second, the typeof of Boolean object returns object, whereas the typeof of a primitive boolean value returns boolean.
```js
console.log(typeof completed); // boolean
console.log(typeof active); // object
```
Third, when applying the  instanceof operator to a Boolean object, it returns true. However, it returns false if you apply the  instanceof operator to a boolean value.
```js
console.log(completed instanceof Boolean); // false
console.log(active instanceof Boolean); // true
```
It is a good practice never to use the Boolean object because it will create much confusion, especially when using in an expression. For example:
```js
let falseObj = new Boolean(false);
if (falseObj) {
    console.log('weird part of the Boolean object');
}
```
### String
To create literal strings, you use either single quotes (') or double quotes (") like this:
```js
let str = 'Hi';
let greeting = "Hello";
```
ES6 introduced template literals that allow you to define a string backtick (`) characters:
```js
let name = `John`;
let mesage = `"I'm good". She said"`;
let str = "Good Morning!";
console.log(str.length);  // 13
let str = "Hello";
console.log(str[0]); // "H"
let str = "Hello";
console.log(str[str.length -1]); // "o"
let name = 'John';
let str = 'Hello ' + name;

console.log(str); // "Hello John"
```