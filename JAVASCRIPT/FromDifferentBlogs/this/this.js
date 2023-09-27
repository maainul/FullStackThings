// implicit
const person = {
  dname: "Mainul",
  age: 22,
  greet: function () {
    return `Hello ${this.dname}, you are ${this.age} years old`;
  },
};
console.log(person.greet());

// explicit
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

// default binding
const agee = 22;
function verifyAge() {
  return agee;
}
console.log(verifyAge());

// Arrow Function Binding

const people = {
  pname: "Mainul",
  page: 25,
  pgreet: () => {
    return `Hello, you are ${this.page} years old`;
  },
};
console.log(people.pgreet());

console.log(this);

function Person() {
  this.name = "jack";
  console.log(this);
}

let person1 = new Person();
console.log(person1.name);
