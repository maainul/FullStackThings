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