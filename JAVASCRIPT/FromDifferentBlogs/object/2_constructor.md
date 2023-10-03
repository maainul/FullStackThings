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