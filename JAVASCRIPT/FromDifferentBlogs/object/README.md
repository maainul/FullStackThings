## Objects
In real life, a is an object.A car has properties like weight and color, and methods like start and stop
All the car have the same properties, but the property values differ from car to car.
All the cars have the same methods, but the methods are performed at different times.
JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

### js object declaration
```js
const object_name = {
    key1:value1,
    key2:value2
}
```

```js
const student = {
    firstName : 'Hasan',
    class:10
}
console.log(typeof student) // object
```
Object can define in a single line

```js
const person = {name: 'John', age=20}
```
### JavaScript Object Properties
In JavaScript, "key: value" pairs are called properties. For example,

```js
const student = {
    firstName : 'Hasan',
    class:10
}
```
### Accessing Object Properties

1. Using dot Notation : objectName.key

```js
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name); // John
```
2. Using bracket Notation : objectName["propertyName"]

```js
const person = { 
    name: 'John', 
    age: 20, 
};
// accessing property
console.log(person["name"]); // John
```
### Nested Objects
An object can also contain another object.

```js
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}
// accessing property of marks object
console.log(student.marks.science); // 70

```
### Object With Methods: (Object Methods) 
```js
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') },
    myName: () => console.log('Mainul Hasan')
}

person.greet(); // hello
person.myName();

```
## Avoid TypeError in JS
```js
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') },
    myName: () => console.log('Mainul Hasan') // using arrow function
}

person.greet(); // hello
person.myName();
console.log(person.age);
console.log(person?.name.length); // to avoid error in js // if brand is not there then undefined will be print
/*
Suppose you want to pick a value that properties is not define in object.then this error will happend
console.log(person.namee.length);
                        
TypeError: Cannot read properties of undefined (reading 'length')

to avoid typeerror print like this

console.log(person?.name.length); 

it will give result undefined
*/
```
## Constructor 

```js
function Person(){
    this.name = 'John',
    this.age = 23
}

const person = new Person();

console.log(person);
```
Result 

Person { name: 'John', age: 23 }

### Create Multiple Objects with Constructor Function
```js
function Person(){
    this.name = 'John',
    this.age = 23,

    this.greet = function(){
        console.log('hello');
    }
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.name);
console.log(person2.name);
```
### JavaScript Constructor Function Parameters
```js
// using object lateral
let person = {
    name: 'Sam'
}

console.log(person.name); // Sam
let student = person;
// changes the property of an object
student.name = 'John';
// changes the origins object property
console.log(person.name); // John
```

### Adding Properties And Methods in an Object

```js
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding property to person1 object
person1.gender = 'male';

// adding method to person1 object
person1.greet = function () {
    console.log('hello');
}

person1.greet();   // hello

// Error code
// person2 doesn't have greet() method
person2.greet();
```
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

## Constructor Prototype
```js
function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function (){
    return this.firstName+' '+ this.lastName;
}

let p1 = new Person('Mainul','Hasan');
let p2 = new Person('Kusum','Hasan');

console.log(p1.getFullName());
console.log(p2.getFullName());

// Classes in ES6

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + ' '+ this.lastName;
    }
}

let p11 = new Person('Hasan','Saheb');
let p12 = new Person('nonono','yyyy');
console.log(p11.getFullName());
console.log(p12.getFullName());

```
In this syntax, the class moves the property initialization to the constructor method. It also packs the getFullName() method in the same place as the constructor function.

The class syntax looks cleaner and less verbose. However, it’s syntactic sugar over the constructor/prototype pattern with some enhancements.


## this

the `this` keyword refers to an <b>object</b>
The `this` keyword refers to different objects depending on how it is used:

1. In an object method, this refers to the object.

2. Alone, this refers to the global object.

3. In a function, this refers to the global object.

4. In a function, in strict mode, this is undefined.

5. In an event, this refers to the element that received the event.

6. Methods like call(), apply(), and bind() can refer this to any object.

There are various ways to set this in JavaScript:

1. Implicit binding

2. Explicit binding

3. Default binding

4. Arrow function binding

5. Implicit binding : When we call a function as a method of the object this keyword refers to the calling objectExample: In this example, we will see the implicit binding of this keyword.

```js
const person = {
  dname: "Mainul",
  age: 22,
  greet: function () {
    return `Hello ${this.dname}, you are ${this.age} years old`;
  },
};
console.log(person.greet());
```

    Hello Mainul, you are 22 years old

2. Explicit Binding : When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.

```js
function ageVerify() {
  if (this.age > 18) {
    console.log("Yes you can drive");
  } else {
    console.log("No you can not drive");
  }
}

const per1 = { age: 21 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);
```

    Yes you can drive

    No you cannot drive

Default Binding: When this keyword is used in global scope this is set to window object.

```js
// default binding
const agee = 22;
function verifyAge() {
  return agee;
}
console.log(verifyAge());
```

4. Arrow Function Binding: When this is used in the arrow function then this has lexical scope so without the function keyword this is uanble to refer to the object in the outer scope.

```js
const people = {
  pname: "Mainul",
  page: 25,
  pgreet: () => {
    return `Hello, you are ${this.page} years old`;
  },
};
console.log(people.pgreet());
```
### Object Property

Objects have two types of properties: data and accessor properties.

1. Data Properties :
A data property contains a single location for a data value. A data property has four attributes:

 [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
 
 [[Enumerable]] – indicates if a property can be returned in the for...in loop.
 
 [[Writable]] – specifies that the value of a property can be changed.
 
 [[Value]] – contains the actual value of a property.

By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all properties defined directly on an object. The default value of the[[Value]] attribute is undefined.

The following example creates a person object with two properties firstName and lastName with the configurable, enumerable, and writable attributes set to true. And their values are set to 'John' and 'Doe' respectively:

```js
let person = {
    firstName:'John',
    lastName:'Doe'
};

```
To change any attribute of a property, you use the Object.defineProperty() method.

The Object.defineProperty() method accepts three arguments:

 An object.

 A property name of the object.

 A property descriptor object that has four properties: configurable, enumerable, writable, and value.

If you use the Object.defineProperty() method to define a property of the object, the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.

The following example creates a person object with the age property:

```js
let person = {};
person.age = 25;
```
Since the default value of the [[Configurable]] attribute is set to true, you can remove it via the delete operator:

```js
delete person.age();
console.log(person.age);
```
Output

    undefined

The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:

```js
'use strict';

let person = {};

Object.defineProperty(person, 'ssn',{
    configurable: false,
    value:'012-38-9119'
});
delete person.ssn;

```
Output

    TypeError: Cannot delete property 'ssn' of #<Object>

In this example, the configurable attribute is set to false. herefore, deleting the ssn property causes an error.

Also, once you define a property as non-configurable, you cannot change it to configurable.

If you use the Object.defineProperty() method to change any attribute other than the writable, you’ll get an error. or example:

```js
'use strict';

let person = {};

Object.defineProperty(person, 'ssn',{
    configurable: false,
    value: '012-342-32'
});

Object.defineProperty(person,'ssn',{
     configurable: true
})
```

Output 

    TypeError: Cannot redefine property: ssn

By default, the enumerable attribute of all the properties defined on an object is true. t means that you can iterate over all object properties using the for...in loop like this:
```js
let person = {};
person.age = 25;
person.ssn = '012-38-9119'

for(let property in person){
    console.log(property);
}
```
Output:

    age
    ssn

The following makes the ssn property non-enumerable by setting the enumerable attribute to false.

```js
let person = {};
person.age = 25;
person.ssn = '012-38-9119';

Object.defineProperty(person,'ssn',{
    enumerable:false
});

for(let prop in person){
    console.log(prop);
}

```
Output

    age


2. Access Properties :

Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.

But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.

To define an accessor property, you must use the Object.defineProperty() method. or example:

```js
let person = {
    firstName: 'John',
    lastName:'Doe'
}

Object.defineProperty(person,'fullName',{
    get: function(){
        return this.firstName+' '+ this.lastName;
    },
    set : function(value){
        let parts = value.split(' ');
        if(parts.length == 2){
            this.firstName = parts[0];
            this.lastName = parts[1];
        }else{
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName);

```
Output

    John Doe


In this example:

First, define the person object that contains two properties: firstName and lastName.

Then, add the fullName property to the person object as an accessor property.

In the fullname accessor property:

The [[Get]] returns the full name that is the result of concatenating of firstName, space, and lastName.

The [[Set]] method splits the argument by the space and assigns the firstName and lastName properties the corresponding parts of the name.

If the full name is not in the correct format i.e., first name, space, and last name, it will throw an error.

### Define multiple properties: Object.defineProperties()
In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method. or example:

```js
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
```
### object property descriptor

The  Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property. The Object.getOwnPropertyDescriptor() method takes two arguments:

1. An object

2. A property of the object

It returns a descriptor object that describes a property. The descriptor object has four properties: configurable, enumerable, writable, and value.
```js
let person = {
    firstName : 'Mainul',
    lastName:'Hasan'
};

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);

```
Output

    {
        value: 'John',
        writable:true,
        enumerable:true,
        configurable:true
    }


### Summary

JavaScript objects have two types of properties: data properties and accessor properties.

JavaScript uses internal attributes denoted by [[...]] to describe the characteristics of properties such as [[Configurable]], [[Enumerable]], [[Writable]], and  [[Value]], [[Get]], and [[Set]].

The method Object.getOwnPropertyDescriptor() return a property descriptor of a property in an object.

A property can be defined directly on an object or indirectly via the Object.defineProperty() or Object.defineProperties() methods. These methods can be used to change the attributes of a property.

### For In Loop

The for...in loop iterates over the enumerable properties of an object. It also goes up to the prototype chain and enumerates inherited properties.
Avoid using for...in loop to iterate over elements of an array, especially when the index order is important.

```js
const person = {
    firstName: 'John',
    lastName:'Doe',
    ssn:'299-24-2351' 
};

for (let prop in person){
    console.log(prop + ": "+ person[prop]);
}

```
Output

    firstName:John
    lastName:Doe
    ssn:299-24-2351

```js
let decoration = {
    color : 'red'
};
let circle = Object.create(decoration);
circle.radius = 10;

for ( const prop in circle){
    console.log(prop)
}


```
Output

    radius
    color


The circle object has its own prototype that references the decoration object. Therefore, the for...in loop displays the properties of the circle object and its prototype.

If you want to enumerate only the own properties of an object, you use the hasOwnProperty() method:
```js
for(const prop in circle){
    if(circle.hasOwnProperty(prop)){
        console.log(prop);
    }
}
```

Output

    radius

<b>It’s good practice to not use the for...in to iterate over an array, especially when the order of the array elements is important</b>

### Introduction to JavaScript enumerable properties
Enumerable properties are iterated using the for...in loop or Objects.keys() method.

In JavaScript, an object is an unordered list of key-value pairs. The key is usually a string or a symbol. The value can be a value of any primitive type (string, boolean, number, undefined, or null), an object, or a function.
```js
const person = {
    firstName: 'John',
    lastName: 'Doe
};
```
The person object has two properties: firstName and lastName.

An object property has several internal attributes including value, writable, enumerable and configurable. See the Object properties for more details.

The enumerable attribute determines whether or not a property is accessible when the object’s properties are enumerated using the for...in loop or Object.keys() method.

By default, all properties created via a simple assignment or via a property initializer are enumerable. For example:

```js
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;

for (const key in person) {
    console.log(key);
}

```
Output

    firstName
    lastName
    age

The firstName and lastName are enumerable properties because they are created via a property initializer.


The age property is also enumerable because it is created via a simple assignment.

To change the internal enumerable attribute of a property, you use the Object.defineProperty() method. For example:

```js
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;

Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});

for (const key in person) {
    console.log(key);
}


```
Output

    firstName
    lastName
    age

In this example, the ssn property is created with the enumerable flag sets to false, therefore it does not show up in the for...in loop.

ES6 provides a method propertyIsEnumerable() that determines whether or not a property is enumerable. It returns true if the property is enumerable; otherwise false. For example:
```js
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;

Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});


console.log(person.propertyIsEnumerable('firstName')); // => true
console.log(person.propertyIsEnumerable('lastName')); // => true
console.log(person.propertyIsEnumerable('age')); // => true
console.log(person.propertyIsEnumerable('ssn')); // => false
```

### Summary

A property is enumerable if it has the enumerable attribute sets to true. The obj.propertyIsEnumerable() determines whether or not a property is enumerable.

A property created via a simple assignment or a property initializer is enumerable.

### Object.Values()

Prior to ES2017, you use a for...in loop and Object.hasOwnProperty()  method to access values of own enumerable properties of an object. For example:
```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value);

    }
}
```
Output:

    John
    Doe
    25

ES2017 introduces a new method called Object.values() that allows you to return an array of own enumerable property’s values of an object.

The following shows the syntax of the Object.values():

The Object.values() accepts an object and returns its own enumerable property’s values as an array. See the following example:
```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person);

console.log(profile);
```

Output:

[ 'John', 'Doe', 25 ]

### Object.values() vs. for...in

The Object.values() returns own enumerable properties while the for...in loop iterates properties in the prototype chain.

Technically, if you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of values as the Object.values().

## Prior to ES2017, you use a for...in loop and Object.hasOwnProperty()  method to access values of own enumerable properties of an object. For example:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value);

    }
}
Code language: JavaScript (javascript)
Output:

John
Doe
25
ES2017 introduces a new method called Object.values() that allows you to return an array of own enumerable property’s values of an object.

The following shows the syntax of the Object.values():

Object.values(obj)
Code language: JavaScript (javascript)
The Object.values() accepts an object and returns its own enumerable property’s values as an array. See the following example:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person);

console.log(profile);
Code language: JavaScript (javascript)
Output:

[ 'John', 'Doe', 25 ]
Code language: JSON / JSON with Comments (json)
Object.values() vs. for...in
The Object.values() returns own enumerable properties while the for...in loop iterates properties in the prototype chain.

Technically, if you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of values as the Object.values().


## Introduction to JavaScript Object.entries() method

ES2017 introduces the Object.entries() method that accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object.

Here is the syntax of the Object.entries() method:
```js
const ssn = Symbol('ssn');
const person = {
    firstName:'John',
    lastName:'Doe',
    age:25,
    [ssn]:'123-345-789'
};

const kv = Object.entries(person);
console.log(kv);

```

Output

    [
     ['firstName', 'John'],
     ['lastName', 'Doe'],
     ['age', 25]
    ]

The firstName, lastName, and age are own enumerable string-keyed property of the person object, therefore, they are included in the result.

The ssn is not a string-key property of the person object, so it is not included in the result.

## Object.is()

The Object.is() behaves like the === operator with two differences:

### Negative zero
```js
let amount = +0,
volume = -0;

console.log(volume === amount) // true
```
However, the Object.is() treats +0 and -0 as different values. For example:
```js
let amount = +0,
volume = -0;

console.log(Object.is(volume,amount)) // false
```
### NaN
The === operator considers NaN and NaN are different values. The NaN is the only number that does not equal itself. For example:

```js
let quantity = NaN;
console.log(quantity === quantity); // false

```

However, Object.is() treats NaN as the same value:
```js
let quantity = NaN;
console.log(Object.is(quantity,quantity)); // true
```

## Introduction to the factory functions
A factory function is a function that returns a new object. The following creates a person object named person1:
```js
let person1 ={
    firstName:'John',
    lastName:'Doe',
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person1.getFullName());

```
Output

    John Doe


The person1 object has two properties: firstName and lastName, and one method getFullName() that returns the full name.

Suppose that you need to create another similar object called person2, you can duplicate the code as follows:

```js
let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person2.getFullName()); // John Doe
```

In this example, the person1 and person2 objects have the same properties and methods.

The problem is that the more objects you want to create, the more duplicate code you have.

To avoid copying the same code all over again, you can define a function that creates the person object:
```js
function createPerson(firstName, lastName){
    return {
        firstName : firstName,
        lastName : lastName,
        getFullName() {
            return firstName+' '+ lastName;
        },
    };
}

```
When a function creates and returns a new object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

The following show how to use the createPerson() factory function to create two objects person1 and person2:
```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());

```
By using the factory function, you create any number of the person objects without duplicating code.

When you create an object, the JavaScript engine allocates memory to it. If you create many person objects, the JavaScript engine needs lots of memory spaces to store these objects.

However, each person object has a copy of the same getFullName() method. It’s not efficient memory management.

To avoid duplicating the same getFullName() function in every object, you can remove the getFullName() method from the person object:

```js
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

```

And Move this method to another object.

```js
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};
```
And before calling the getFullName() method on the person object, you can assign the method of the personActions object to the person object as follows:

```js
let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

person1.getFullName = personActions.getFullName;
person2.getFullName = personActions.getFullName;

console.log(person1.getFullName());
console.log(person2.getFullName());
```
### Object.create() method
The Object.create() method creates a new object using an existing object as the prototype of the new object:
```js
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());

```
A factory function is a function that returns a new object.

Use Object.create() to create an object using an existing object as a prototype.

### Object Destructuring
Suppose you have a person object with two properties: firstName and lastName.

```js
let person = {
    firstName:'John',
    lastName: 'Doe'
};
```
Prior to ES6, when you want to assign properties of the person object to variables, you typically do it like this:
```js
let firstName = person.firstName;
let lastName = person.lastName;
```
ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

```js
let {firstName:fname, lastName: lname} = person;
```
In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively.

In this syntax:
```js
let { property1: variable1, property2: variable2 } = object;
```
If the variables have the same names as the properties of the object, you can make the code more concise as follows:
```js
let {firstName, lastName} = person;

console.log(firstName); // John
console.log(lastName); // Doe
```
When you assign a property that does not exist to a variable using the object destructuring, the variable is set to undefined. For example:
```js
let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined
```
In this example, the middleName property doesn’t exist in the person object, therefore, the middleName variable is undefined

### Setting Default Values

You can assign a default value to the variable when the property of an object doesn't exist.For Example:
```js
let person = {
    firstName:'John',
    lastName:'Doe',
    currentAge:28
};

let {firstName,lastName,middleName='',currentAge:age= 18} = person;

console.log(middle); // ''
console.log(age); // 28
```
In this example, we assign an empty string to the middleName variable when the person object doesn’t have the middleName property.

Also, we assign the currentAge property to the age variable with the default value of 18.

However, when the person object does have the middleName property, the assignment works as usual:

```js
let person = {
    firstName: 'John',
    lastName:'Doe',
    middleName:'C.',
    currentAge:28
};

let {firstName,lastName, middleName='', currentAge: age=18} = person;

console.log(middleName); // 'C.'
console.log(age) // 28
```
### Destructuring a null object
A function may return an object or null in some situations.For example:
```js
function getPerson(){
    return null;
}
```
And you use the object destructurig assignment:
```js
let {firstName, lastName} = getPerson();

console.log(firstName,lastName);
```
The Code will throw a TypeError:
```js
TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
```
To avoid this, you can use the OR operator (||) to fallback the null object to an empty object:
```js
let {firstName, lastName} = getPerson() || {};
```
Now, no error will occur. And the firstName and lastName will be undefined.

### Nested Object Destructring
```js
let employee = {
    id:1001,
    name : {
        firstName : 'John',
        lastName:'Doe'
    }
};

let {
    name:{
        firstName,
        lastName
    }
} = employee;

console.log(firstName);
console.log(lastName);
```
It’s possible to do multiple assignement of a property to multiple variables:
```js
let employee = {
    id: 1001,
    name: {
        firstName:'John',
        lastName:'Doe'
    }
};

let {
    name:{
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName);
console.log(lastName);
console.log(name); // {firstName:'John',lastName:'Doe'}
```
### Desturcturing function arguments
```js
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName:'John',
    lastName:'Doe'
};
display(person); // John Doe
```
It’s possible to destructure the object argument passed into the function like this:
```js
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName:'John',
    lastName:'Doe'
};

display(person); // john Doe
```

### Object Literal Syntax Extensions in ES6
The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity.ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.
### Object property initializer shorthand
Prior to ES6 an object literal is a collection of name-value pairs.For example :

```js
function createMachine(name,status){
    return {
        name:name,
        status:status
    };
}

```
The createMachine() function takes two arguments name and status and returns a new object literal with two properties: name and status.

The name and status properties take the values of the name and status parameters. This syntax looks redundant because name and status mentioned twice in both the name and value of properties.

ES6 allows you to eliminate the duplication when a property of an object is the same as the local variable name by including the name without a colon and value.

For example, you can rewrite the createMachine() function in ES6 as follows:

```js
function createMachine(name,status){
    return {
        name,
        status
    };
}
```

```js
let server = {
    name: 'Server',
    restart(){
        console.log("The" + this.name+ "is restarting....");
    },
    'starting up'(){
        console.log("The" + this.name+ "is starting up....");
    }
}

server['starting up']();
```