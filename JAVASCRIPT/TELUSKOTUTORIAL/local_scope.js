var globalOne = 16;
function testingScope() {
  let localOne = 12;
  console.log(localOne);
  console.log(globalOne);
}
testingScope();
//console.log(localOne); // ReferenceError: localOne is not defined
console.log(globalOne);

let carName = "Volvo";
function carInfo() {
  console.log(carName);
}
carInfo();




