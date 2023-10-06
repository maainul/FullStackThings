
### new.target Metaproperty
ES6 provides a metaproperty named new.target that allows you to detect whether a function or constructor was called using the new operator.
The new.target is available in all functions.The new.target is very useful to inspect at runtime whether a function is being executed as a function or as a constructor. It is also handy to determine a specific derived class that was called by using the new operator from within a parent class.
```js
function Person(name){
    this.name = name;
}
let john = new Person('John');
console.log(john.name) // john
// OR
Person('Lily')

```
In a regular function call, the new.target returns undefined. If the function was called with the new operator, the new.target returns a reference to the function.
```js
class Person{
    constructor(name){
        this.name = name;
        console.log(new.target.name);
    }
}
class Employee extends Person{
    constructor(name,title){
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); // Person
let lily = new Employee('Lily BUsh','Programmer'); // Employee

```
### Static Method
 static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.
 To define a static method before ES6, you add it directly to the constructor of the class. For example, suppose you have a Person type as follows:
 ```js
 function Person(name){
    this.name = name;
 }

 Person.prototype.getName = function (){
    return this.name;
 }

 Person.createAnonymous = function(gender){
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
 }

 let ano = Person.createAnonymous();
 
 ```
 The createAnonymous() method is considered a static method because it doesn’t depend on any instance of the Person type for its property values.

To call the createAnonymous() method, you use the Person type instead of its instances:

### static methods in ES6
```js
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static createAnonymous(gender){
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new Person(name);
    }
}

let anonymous = Person.createAnonymous("male");

```
If you attempt to call the static method from an instance of the class, you’ll get an error. For example:
```js
let person = new Person('James Doe');
let anonymous = person.createAnonymous("male");

```
Error 

```js
TypeError: person.createAnonymous is not a function
```

### Calling a static method from the class constructor or an instance method

To call a static method from a class constructor or an instance method, you use the class name, followed by the . and the static method:

```js
className.staticMethodName();
```
Alternatively you can use the following syntax:

```js
this.constructor.staticMethodName();
```
### Static Properties
Like a static method, a static property is shared by all instances of a class. To define static property, you use the static keyword followed by the property name like this:

```js
class Item{
    constructor(name,quantity){
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }

    static count = 0;
    static getCount(){
        return Item.count;
    }
}
// When you create a new instance of the Item class, the following statement increases the count static property by one:
let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount()); // 2

```
A static property of a class is shared by all instances of that class.

Use the static keyword to define a static property.

Use the className.staticPropertyName to access the static 
property in a static method.

Use the this.constructor.staticPropertyName or className.staticPropertyName to access the static property in a constructor.

### Private Fields

ES2022 allows you to define private fields for a class.To define a private field, you prefix the field name with the # sign.
```js
class Circle{
    #radius;
    constructor(value){
        this.#radius = value;
    }
    get area(){
        return Math.PI * Math.pow(this.#radius,2);
    }
}

```
In this example:

First, define the private field #radius in the class body.

Second, initialize the #radius field in the constructor with an argument.

Third, calculate the area of the circle by accessing the #radius private field in the getter method.

The following creates a new instance of the Circle class and calculates its area:

```js
let circle = new Circle(10);
console.log(circle.area) // 314.15926
```
Because the #radius is a private field, you can only access it inside the Circle class. 

In other words, the #radius field is invisible outside of the Circle class.

### Using getter and setter to access private fields
```js
class Circle{
    #radius = 0;
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return Math.PI * Math.pow(this.#radius,2);
    }
    set radius(value){
        if(typeof value === 'number' && value > 0){
            this.#radius = value;
        }else{
            thow 'The radius must be a positive number';
        }
    }
    get radius(){
        return this.#radius;
    }
}

```
### Private fields and subclasses
Private fields are only accessible inside the class where they’re defined. Also, they’re not accessible from the subclasses. For example, the following defines the Cylinder class that extends the Circle class:
```js
class Cyliner extends Circle{
    #height;
    construcotor(radius,height){
        super(radius);
        this.#height = height;

        // Can not access the #radius of the circle class here
    }
}
```
if you attempt to access the #radius private field in the Cyliner class you'll get a SyntaxError

### The in operator: check private fields exist
To check if an object has a private field inside a class, you use the in operator:

For example, the following adds the hasRadius() static method to the Circle class that uses the in operator to check if the circle object has the #radius private field:

```js
class Circle{
    #radius = 0;
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value){
        if(typeof value === 'number' && value > 0){
            this.#radius = value;
        }else {
            throw 'The radius must be a positive number';
        }
    }
    get radius(){
        return this.#radius;
    }
    static hasRadius(circle){
        return #radius in circle;
    }
}

let circle = new Circle(10);

console.log(Circle.hasRadius(circle));
```
Output

    true


### Static Private Fields
```js
class Circle{
    #radius = 0;
    static #count = 0;
    constructor(radius){
        this.radius = radius; // calling setter
        Circle.#count++;
    }
    get area(){
        return Math.PI * Math.pow(this.radius,2);
    }
    set radius(value){
        if(typeof value === 'number' && value > 0){
            this.#radius = value;
        }else{
            throw 'The radius must be a positive number'
        }
    }
    get radius(){
        return this.#radius;
    }
    static hasRadius(circle){
        return #radius in circle;
    }
    static getCount(){
        return Circle.#count;
    }
}
let circle = [new Circle(10), new Circle(20), new Circle(30)];

console.log(Circle.getCount()); // 3
```
Prefix the field name with # sign to make it private.

Private fields are accessible only inside the class, not from outside of the class or subclasses.

Use the in operator to check if an object has a private field.

### Private methods
The following shows the syntax of defining a private instance method:
```js
class MyClass {
  #privateMethod() {
    //...
  }
}
```
To call the #privateMethod inside the MyClass, you use the this keyword as follows:
```js
this.#privateMethod();
```
The following illustrates the syntax of defining a private static method:
```js
class MyClass {
  static #privateStaticMethod() {
    //...
  }
}
```
The following shows the syntax of the private getters/setters:
```js
class MyClass{
    #field;

    get #myField(){
        return #field;
    }
    set #myField(value){
        #field = value;
    }
}
```
### private method examples
### 1) Private instance method example
```js
class Person{
    #firstName;
    #lastName;
    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    getFullName(format = true){
        return format ? this.#firstLast() : this.#lastFirst();
    }
    #firstLast(){
        return '${this.#firstName} ${this.#lastName}';
    }
    #lastFirst(){
        return '${this.#lastName}, ${this.#firstName}';
    }
}

let person = new Person('John','Doe');
console.log(person.getFullName()); // John Doe
```
### 2) Private static method example
```js
class Person{
    #firstName;
    #lastName;
    constructor(firstName,lastName){
        this.#firstName = Person.#validate(firstName);
        this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true){
        return format ? this.#firstLast() : this.#lastFirst();
    }
    static #valiate(name){
        if(typeof name === 'string'){
            let str= name.trim();
            if(str.length >= 3){
                return str;
            }
        }
    throw 'The name must be a string with at least 3 characters';
    }
    #firstLast(){
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst(){
        return `${this.#lastName}, ${this.#firstName}`;
    }
}
let person = new Person('John','Doe');
console.log(person.getFullName());

```

### Instance of
```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

let p1 = new Person('John');

console.log(p1 instanceof Person); // true

```

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let e1 = new Employee();

console.log(e1 instanceof Employee); // true
console.log(e1 instanceof Person); // true
console.log(e1 instanceof Object); // true
```