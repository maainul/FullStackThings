## call()
With the call() method, you can write a method that can be used on different objects.
In JavaScript all functions are object methods.

```js
const person = {
    firstName : "John",
    lastName : "Doe",
    fullName : function (){
        return this.firstName+" "+ this.lastName;
    }
}
console.log(person.fullName());
```
Result 

    John Doe

### Use Call Method 
```js
let fullName = function () {
  return this.firstName + " " + this.lastName;
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(fullName.call(person1));
console.log(fullName.call(person2));
```
The call() method takes arguments separately.

The apply() method takes arguments as an array.

```js
let fullName = function (city, country) {
  return this.firstName + " " + this.lastName+","+city +","+ country;
};

const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(fullName.call(person,"Oslo","Norway"));        //John Oslo Norway
console.log(fullName.apply(person,["Dhaka","Bangladesh"])); // Mary Doe Dhaka Bangladesh
```

