let num = 4;
let result;

if (num % 2 === 0) {
  result = "EVEN";
} else {
  result = "ODD";
}
console.log(result);

result = num % 2 === 0 ? "EVEN" : "ODD";
console.log(result);
