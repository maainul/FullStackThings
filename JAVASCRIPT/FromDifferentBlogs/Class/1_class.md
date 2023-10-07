## Class
A class encapsulates data and functions that manipulate data.
Prior to ES6, JavaScript had no concepts of classes. To mimic a class, you often use the constructor/prototype pattern as shown in the following example:

```js
// Constructor Function
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

let john = new Person("John Doe");
console.log(john.getName()); // John Doe

```
First, create the Person as a constructor function that has a property name called name. The getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.

Then, create a new instance of the Person type using the new operator. The john object, hence, is an instance of the Person and Object through prototypal inheritance.

The following statements use the instanceof operator to check if john is an instance of the Person and Object type:

```js
console.log(john instanceof Person) // true
console.log(john instanceof Object) // true
```
## ES6 class declaration
```js
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
```
This Person class behaves like the Person type in the previous example. However, instead of using a constructor/prototype pattern, it uses the class keyword.

In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.

The following creates a new Person object, which will automatically call the constructor() of the Person class:
```js
let john = new Person("John Doe")
let name = john.getName();
console.log(name); // John Doe

```
To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.

```js
console.log(typeof Person); // function
```
It returns function as expected
The john object is also an instance of the Person and Object types:
```js
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
```
## Class vs. Custom type
Despite the similarities between a class and a custom type defined via a constructor function, there are some important differences.

1. class declarations are <b>not hoisted</b> like function declarations.

For example, if you place the following code above the Person class declaration section, you will get a ReferenceError.
```js
let john = new Person("John Doe");
```

Error

```js
Uncaught ReferenceError: Person is not defined
```
2. all the code inside a class automatically executes in the <b>strict mode</b>. And you cannot change this behavior.

3. class methods are<b> non-enumerable</b>. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable.

4. calling the class constructor <b>without the new operator</b> will result in an error as shown in the following example.

```js
let john = Person("John Doe");
```
Error:

```js
Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
```
