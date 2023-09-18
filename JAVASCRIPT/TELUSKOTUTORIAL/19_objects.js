let allien = {
  name: "mainul",
  age: "30",
  experience: 2,
};
console.log(allien);
console.log(typeof allien);
console.log(typeof allien.age);
console.log(typeof allien.experience);
console.log(allien['name']);


// complex object

let person = {
    uname: "mainul",
    age: "30",
    experience: 2,
    laptop:{
        cpu : '2.4hz',
        ram:'8 GB',
        brand:'Asus'
    },
  };
  console.log(person);
  console.log(typeof person);
  console.log(typeof person.age);
  console.log(typeof person.experience);
  console.log(person['uname']);
  console.log(person?.laptop1?.brand?.length); // to avoid error in js // if brand is not there then undefined will be print
  delete person.age
  console.log(person); // it will not delete it only not printed 