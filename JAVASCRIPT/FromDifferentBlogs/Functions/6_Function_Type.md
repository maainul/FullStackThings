### Function Type
In Javascript all functions are objects. They are the instances of the Function type.Beacuse Functions are objects, they have properties and method like other objects.

### Functions properties
Each function has two important properties :

1. length : determines the number of named arguments specified in the function declaration.
2. prototype :  references the actual function object.

Example
```js
function add(x,y){
    return x + y;
}
console.log(add.length);    // 2
console.log(add.prototype); // Object{}
```

### Function Call types
```js
let rs = add(34,35);
console.log(rs);

let rs = new add(34,20);
```
### new.target : Check function call type
By using the new.target, you can control how a function will be called.If a function is called normally, the new.target is undefined. However, if the function is called using the new keyword as a constructor, the new.target return a reference to the constructor.

```js
function add(x,y){
    console.log(new.target);
    return x + y;
}
let result = add(10,20);    // undefined
let object = new add(10,20) // [Function: add]
```
### Error check with new.target
```js
function add(x,y){
    if(new.target){
        throw 'The add function can not be called as a constructor';
    }
    return x + y;
}

let obj = new add(10,20);
console.log(obj);

```
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

## Bind() :
The bind() method allows an object to borrow a method from another object without copying.
It is possible to call a function from another function.supporse you want to call introduction
method from student2.But in student2 don't have any function introduction.How can we call.By this 
bind we can call the introduction method.

```js
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + " studies in grade " + this.grade + ".");
  },
};

const student2 = {
  name: "jimmy",
  grade: "6",
};

student1.introduction();
student2.introduction();

```
RESULT 

    Jack studies in grade 5.
    F:\Codes\github\FullStackThings\JAVASCRIPT\FromD
    ifferentBlogs\call_apply_bind\call_apply_bind.js
    :33
    student2.introduction();
          ^
    TypeError: student2.introduction is not a function

## Let's Use the bind() method:

```js
// object definition
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + ".");
  },
};

// object definition
const student2 = {
  name: "Jimmy ",
  grade: " 6",
};
// the object student2 is borrowing introduction method from student1
let result= student1.introduction.bind(student2);
// invoking introduction() function
result();
// Output:
// Jimmy studies in grade 6.
```
### Using bind() Method with two Parameters

