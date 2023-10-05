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