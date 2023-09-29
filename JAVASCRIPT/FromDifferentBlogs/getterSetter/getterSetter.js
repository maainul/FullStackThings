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
//---------------------------------
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
