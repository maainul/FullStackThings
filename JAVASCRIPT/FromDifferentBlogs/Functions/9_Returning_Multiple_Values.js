function getName() {
  let firstName = "john",
    lastName = "Doe";

  return [firstName, lastName];
}

let names = getName();
const firstName = names[0],lastName=names[1];
console.log(firstName);
console.log(lastName);

const[firstName1,lastName1] = getName();
console.log(firstName1);
console.log(lastName1);


