## JavaScript Getter and Setter

There are two kinds of object properties:

1. Data properties

2. Accessor properties

### 1. Data properties
```js
const student = {
    // data property
    firstName: 'Kusum'
}
```
### 2. Accessor properties:

Accessor properties are methods that get or set the value of an object.For, that, we use these two keywords:

<b>get</b> - to define a getter method to get the property value.

<b>set</b> - to define a setter method to set the property value.


### JavaScript Getter : getter methods are used to access the properties of an object
```js
const student = {
    // data property
    firstName: 'Kusum',
    get getName(){
        return this.firstName
    }
};

console.log(student.firstName);  // Kusum
console.log(student.getName);    // Kusum
console.log(student.getName());  // error
```
### JavaScript Setter : Setter methods are used to change the values of an object

```js
const student = {
    firstName: 'Monica',
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah
```

## JavaScript Object.defineProperty() :  
You can also use Object.defineProperty() method to add getters and setters. 
```js
// ----------------- JavaScript Object.defineProperty() ------
const studentt = {
    firstName : 'Monica',
}
// getting property
Object.defineProperty(studentt,"getName",{
    get : function(){
        return this.firstName;
    }
});
//setting property
Object.defineProperty(studentt,"changeName",{
    set : function(value){
        this.firstName = value;
    }
});

console.log(studentt.firstName); // Monica
studentt.changeName='Sarah';
console.log(studentt.firstName);
```

### Another Example :
```js
const user = {
    _password: "",
    get password() {
        return this._password;
    },
    set password(value) {
        this._password = this.encrypt(value);
    },
    encrypt(value) {
        // Encrypt the password value
        return value.split("").reverse().join("");
    },
    decrypt(value) {
        // Decrypt the password value
        return value.split("").reverse().join("");
    },
};
  
console.log(user.password); // ""
user.password = "password123";
console.log(user.password); // "321drowssap"
console.log(user.decrypt(user.password)); // "password123"
```