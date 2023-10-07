### Prototypal inheritance
If you’ve worked with other object-oriented programming languages such as Java or C++, you’ve been familiar with the inheritance concept

In  this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.

JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.

Now that you have understood a brief detailed description of Prototype inheritance let us see and understand Prototype Inheritance with several following approaches-

1. using __proto__
2. Using Object.setPrototypeOf() method

### prototypal inheritance and __proto__

```js
let person = {
    name:"John Doe",
    greet: function (){
        return "HI I am "+ this.name;
    }
};

console.log(person.toString()); //[object Object]
console.log(person.__proto__);
console.log(person.__proto__ === Object.prototype); // true

```
By default, the javascript engine provides you with a build-in <b>Object()</b> function and an anonymous object that can be referenced by the <b>Object.prototype</b>.
In this example, the person object has a property and a method:

1. name is a property that stores the person’s name.
2. greet is a method that returns a greeting as a string.

When you call toString() method via person, the JavaScript engine cannot find it on the person object. Therefore, the JavaScript engine follows the prototype chain and searches for the method in the Object.prototype object.

Since the JavaScript engine can find the toString() method in the Object.prototype object, it executes the toString() method.

To access the prototype of the person object, you can use the __proto__ property as follows

```js
console.log(person.__proto__); // [Object: null prototype] {}
```
The following shows the person.__proto__ and Object.prototype references the same object:
```js
console.log(person.__proto__ === Object.prototype); // true
```
The following defines the teacher object that has the teach() method:

```js
let teacher = {
    teach : function (subject){
        return "I can teach "+ subject;
    }
}
```
Like the person object, the teacher.__proto__ references the Object.prototype as illustrated in the following picture:

If you want the teacher object to access all methods and properties of the person object, you can set the prototype of teacher object to the person object like this:

Note that you should never use the __proto__ property in the production code. Please use it for demonstration purposes only.

Now, the teacher object can access the name property and greet() method from the person object via the prototype chain:

```js
teacher.__proto__ = person;

console.log(teacher.name);
console.log(teacher.greet());
```
Output:

    John Doe    
    Hi, I'm John Doe

When you call the greet() method on the teacher object, the JavaScript engine finds it in the teacher object first.

Since the JavaScript engine cannot find the method in the teacher object, it follows the prototype chain and searches for the method in the person object. Because the JavaScript can engine can find the greet() method in the person object, it executes the method.

In JavaScript, we say that the teacher object inherits the methods and properties of the person object. And this kind of inheritance is called prototypal inheritance.

### A standard way to implement prototypal inheritance in ES5
ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.

<b>
ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.
</b>
The Object.create() method creates a new object and uses an existing object as a prototype of the new object:
```js
Object.create(proto, [propertiesObject])
```
The Object.create() method accepts two arguments:

1. The first argument (proto) is an object used as the prototype for the new object.

2. The second argument (propertiesObject), if provided, is an optional object that defines additional properties for the new object.
Suppose you have a person object:
```js
let person = {
    name:"John Doe",
    greet: function(){
        return "Hi I am "+ this.name;
    }
};
```
The following creates an empty teacher object with the __proto__ of the person object:
```js
let teacher = Object.create(person);
```
After that, you can define properties for the teacher object:
```js
teacher.name = 'Lamlu janeor';
teacher.teach = function(subject){
    return "I can teach "+ subject;
}
```
Or you can do all of these steps in one statement as follows:
```js
let teacher = Object.create(person, {
    name: { value: 'John Doe' } ,
    teach: { value: function(subject) {
        return "I can teach " + subject;
    }}
});
```
### Inheritance Using extends and super
The following illustrates how the Bird inherits properties from the Animal using the prototypal inheritance technique:

```js

function Animal(legs){
    this.legs = legs;
}
Animal.prototype.walk = function(){
    console.log('Walking on '+ this.legs + ' legs');
}

function Bird(legs){
    Animal.call(this,legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function(){
    console.log('flying');
}

var piegon = new Bird();
pigeon.walk(); // walking on 2 legs
pigeon.fly();
```
ES6 simplified these steps by using the extends and super keywords.

The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.
```js
class Animal{
    constructor(legs){
        this.legs = legs;
    }
    walk(){
        console.log('Walking on '+ this.legs+ ' legs');
    }
}

class Bird extends Animal{
    constuctor(legs,color){
        super(legs);
        this.color = color;
    }
    fly(){
        console.log('flying');
    }
    getColor(){
        return this.color;
    }
}

let bird = new Bird(2,"White");
bird.fly();
bird.walk();
console.log(bird.getColor()); // white

```
### Shadowing methods

ES6 allows the child class and parent class to have methods with the same name. In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.

The following Dog class extends the Animal class and redefines the walk() method:

```js
class Dog extends Animal{
    construcotr(){
        super(4);
    }
    walk(){
        console.log('go walk');
    }
}

let bingo = new Dog();
bingo.walk(); // go walk
```
To call the method of the parent class in the child class, you use super.method(arguments) like this:

```js
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking

```
### Inheriting static members
Besides the properties and methods, the child class also inherits all static properties and methods of the parent class. For example:

```js
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}
```
In this example, the Animal class has the helloWorld() static method and this method is available as Bird.helloWorld() and behaves the same as the Animal.helloWorld() method:
```js
Bird.helloWorld(); // Hello World
```
### Inheriting from built-in types
JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.

The following Queue class extends the Array reference type. The syntax is much cleaner than the Queue implemented using the constructor/prototype pattern.
```js
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}
```