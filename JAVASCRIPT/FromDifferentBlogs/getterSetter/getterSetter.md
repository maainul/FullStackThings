## JavaScript Getter and Setter

There are two kinds of object properties:

1. Data properties

2. Accessor properties

### 1. Data properties
```js
const student = {
    // data property
    firstName: 'Kusum'
}
```
### 2. Accessor properties:

Accessor properties are methods that get or set the value of an object.For, that, we use these two keywords:

<b>get</b> - to define a getter method to get the property value.

<b>set</b> - to define a setter method to set the property value.


### JavaScript Getter : getter methods are used to access the properties of an object
```js
const student = {
    // data property
    firstName: 'Kusum',
    get getName(){
        return this.firstName
    }
};

console.log(student.firstName);  // Kusum
console.log(student.getName);    // Kusum
console.log(student.getName());  // error
```
### JavaScript Setter : Setter methods are used to change the values of an object

```js
const student = {
    firstName: 'Monica',
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah
```

## JavaScript Object.defineProperty() :  
You can also use Object.defineProperty() method to add getters and setters. 
```js
// ----------------- JavaScript Object.defineProperty() ------
const studentt = {
    firstName : 'Monica',
}
// getting property
Object.defineProperty(studentt,"getName",{
    get : function(){
        return this.firstName;
    }
});
//setting property
Object.defineProperty(studentt,"changeName",{
    set : function(value){
        this.firstName = value;
    }
});

console.log(studentt.firstName); // Monica
studentt.changeName='Sarah';
console.log(studentt.firstName);
```

### Another Example :
```js
const user = {
    _password: "",
    get password() {
        return this._password;
    },
    set password(value) {
        this._password = this.encrypt(value);
    },
    encrypt(value) {
        // Encrypt the password value
        return value.split("").reverse().join("");
    },
    decrypt(value) {
        // Decrypt the password value
        return value.split("").reverse().join("");
    },
};
  
console.log(user.password); // ""
user.password = "password123";
console.log(user.password); // "321drowssap"
console.log(user.decrypt(user.password)); // "password123"
```

###  Getters and Setters (Class)
The following example defines a class called Person:
```js
classs Person(){
    constructor(name){
        this.name = name;
    }
}

let person = new Person("John");
console.log(person.name) // John

```
The Person class has a property name and a constructor. The constructor initializes the name property to a string.

Sometimes, you don’t want the name property to be accessed directly like this:

```js
person.name
```
To do that, you may come up with a pair of methods that manipulate the name property. For example:

```js
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        newName = newName.trim();
        if(newName == ''){
            throw 'The name can not be empty'
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person);

person.setName('Jane Smith');
console.log(person.geName()); // Jane Smith

```
In this example, the Person class has the name property. Also, it has two additional methods getName() and setName().

The getName() method returns the value of the name property.

The setName() method assigns an argument to the name property. The setName() removes the whitespaces from both ends of the newName argument and throws an exception if the newName is empty.

The constructor() calls the setName() method to initialize the name property:
```js
constructor(name){
    this.setName(name);
}
```
The getName() and setName() methods are known as getter and setter in other programming languages such as Java and C++.

ES6 provides specific syntax for defining the getter and setter using the get and set keywords. For example:
```js
class Person{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'The name can not be empty';
        }
        this._name = newName;
    }
}
// To call the getter, you use the following syntax:

// JavaScript will call the name() setter when you assign a value to the name property like this:
let person = new Person("Jane Doe");
console.log(person.name);

// attempt to change the name, but cannot
person.name = 'Jane Smith';
console.log(person.name); // Jane Doe
```
###  Inheritance Using extends & super
Prior to ES6, implementing a proper inheritance required multiple steps. One of the most commonly used strategies is prototypal inheritance. 

The following illustrates how the Bird inherits properties from the Animal using the prototypal inheritance technique:

```js
function Animal(legs){
    this.legs = legs;
}

Animal.prototype.walk = function(){
    console.log('Walking on' + this.legs+ 'legs');
}

function Bird(legs){
    Animal.call(this.legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function(){
    console.log('flying');
}

var pigeon = new Bird(2);
piegon.walk(); // walking on 2 legs
piegon.fly(); // flying
```
ES6 simplified these steps by using the extends and super keywords.

The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.

```js
class Animal{
    constructor(legs){
        this.legs = legs;
    }
    walk(){
        console.log('Walking on' + this.legs + 'legs');
    }
}
class Bird extends Animal{
    constructor(legs){
        super(legs);
    }
    fly(){
        console.log('flying');
    }
    let bird = new Bird(2);
    bird.walk();
    bird,fly();
}

```