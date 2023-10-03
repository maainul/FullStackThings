// Constructor Function
function Person() {
  this.name = "Mainul"
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.gender = "male";

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

console.log(Person.prototype);

// printing variable
console.log(person1.gender);
console.log(person2.gender);

// printing method from prototype
console.log(person1.greet); // Hello Mainul
console.log(person2.greet); // Hello Mainul

Person.prototype.age = 20;
const person3 = new Person();
console.log(person3.age);

// Changing Value of Prototype
Person.prototype = { age: 50 }
const person4 = new Person();
console.log(person4.age);

function Personn(){
    this.name = 'John'
}
Personn.prototype.name = 'Mainul'
Personn.prototype.age = 23

const personnn = new Person();

console.log(personnn.name);
console.log(personnn.age);