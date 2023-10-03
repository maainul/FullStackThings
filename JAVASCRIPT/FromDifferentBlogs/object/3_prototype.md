## Prototype in JavaScript

Javascript is a dynamic language.You can attach new properties to an object at any time.
In other worlds.JavaScript is a prototype based language.Whenever we create a function using javascript. Javascript engine adds a prototype property inside a function.

you can create an object in JavaScript using an object constructor function.

```js
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}
// creating objects
const person1 = new Person();
const person2 = new Person();
```
### JavaScript Prototype
In JavaScript, every function and object has a property named prototype by default. For example,
```js
// Constructor Function
function Person(){
    this.name = "Mainul",
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

console.log(Person.prototype); // {}
```

In the above example, we are trying to access the prototype property of a Person constructor function.

Since the prototype property has no value at the moment, it shows an empty object { ... }.

### Prototype Inheritance
In JavaScript, a prototype can be used to add properties and methods to a constructor function. And objects inherit properties and methods from a prototype. For example,

```js
// Constructor Function
function Person(){
    this.name = "Mainul",
    this.age = 23
}

const person = new Person();
console.log(Person.prototype); // {}
```

In the above example, we are trying to access the prototype property of a Person constructor function.

Since the prototype property has no value at the moment, it shows an empty object { ... }.

### Prototype Inheritance
a prototype can be used to add properties and methods to a constructor function. And objects inherit properties and methods from a prototype.

```js
// Constructor Function
function Person(){
    this.name = "Mainul",
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

console.log(Person.prototype); // {}

Person.prototype.gender = 'male';

console.log(Person.prototype) // { gender: 'male' }

console.log(person1.gender); // male
console.log(person2.gender); // male

```
Result

    {}
    { gender: 'male' }
    male
    male

### Add Methods to a Constructor Function Using Prototype

```js
// Constructor Function
function Person(){
    this.name = "Mainul",
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.gender = 'male';

Person.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
}

console.log(Person.prototype)

// printing variable 
console.log(person1.gender);
console.log(person2.gender);

// printing method from prototype
console.log(person1.greet); // Hello Mainul 
console.log(person2.greet); // Hello Mainul
```
### Changing Prototype
If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value.

```js
function Person() {
  this.name = "Mainul"
}

Person.prototype.age = 20;
const person3 = new Person();
console.log(person3.age); // 20

// Changing Value of Prototype
Person.prototype = { age: 50 }
const person4 = new Person();
console.log(person4.age); // 50

```
### JavaScript Prototype Chaining

If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function. 

```js
function Person() {
    this.name = 'John'
}
// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23
const person1 = new Person();
console.log(person1.name); // John
console.log(person1.age); // 23
```
