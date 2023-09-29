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