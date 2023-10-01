let fullName = function (city, country) {
  return this.firstName + " " + this.lastName + "," + city + "," + country;
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(fullName.call(person1, "Oslo", "Norway"));
console.log(fullName.call(person2, "Dhaka", "Bangladesh"));
console.log(fullName.apply(person2, ["Dhaka", "Bangladesh"]));

// bind : 
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
// object definition
const student3 = {
  name: "Jack",
  introduction: function (score) {
    console.log(this.name + "scored " + score + " in an exam.");
  },
};

// object definition
const student4 = {
  name: "Jimmy ",
};

// passing two parameters student2 and '95'
let result2 = student3.introduction.bind(student4, 95);

// invoking result() function
result2(); // Jimmy scored 95 in an exam.