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