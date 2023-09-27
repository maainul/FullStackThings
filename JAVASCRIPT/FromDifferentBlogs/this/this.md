## this

the `this` keyword refers to an <b>object</b>
The `this` keyword refers to different objects depending on how it is used:

1. In an object method, this refers to the object.

2. Alone, this refers to the global object.

3. In a function, this refers to the global object.

4. In a function, in strict mode, this is undefined.

5. In an event, this refers to the element that received the event.

6. Methods like call(), apply(), and bind() can refer this to any object.

There are various ways to set this in JavaScript:

1. Implicit binding

2. Explicit binding

3. Default binding

4. Arrow function binding

5. Implicit binding : When we call a function as a method of the object this keyword refers to the calling objectExample: In this example, we will see the implicit binding of this keyword.

```js
const person = {
  dname: "Mainul",
  age: 22,
  greet: function () {
    return `Hello ${this.dname}, you are ${this.age} years old`;
  },
};
console.log(person.greet());
```

    Hello Mainul, you are 22 years old

2. Explicit Binding : When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.

```js
function ageVerify() {
  if (this.age > 18) {
    console.log("Yes you can drive");
  } else {
    console.log("No you can not drive");
  }
}

const per1 = { age: 21 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);
```

    Yes you can drive

    No you cannot drive

Default Binding: When this keyword is used in global scope this is set to window object.

```js
// default binding
const agee = 22;
function verifyAge() {
  return agee;
}
console.log(verifyAge());
```

4. Arrow Function Binding: When this is used in the arrow function then this has lexical scope so without the function keyword this is uanble to refer to the object in the outer scope.

```js
const people = {
  pname: "Mainul",
  page: 25,
  pgreet: () => {
    return `Hello, you are ${this.page} years old`;
  },
};
console.log(people.pgreet());
```
## This Inside Constuctor Function

```js


```