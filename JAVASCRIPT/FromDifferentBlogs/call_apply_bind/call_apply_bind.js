let fullName = function (city, country) {
  return this.firstName + " " + this.lastName+","+city +","+ country;
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(fullName.call(person1,"Oslo","Norway"));
console.log(fullName.call(person2,"Dhaka","Bangladesh"));
console.log(fullName.apply(person2,["Dhaka","Bangladesh"]));

