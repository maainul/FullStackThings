let values = [5, 7, 8];
console.log(values.length);

let val = [];
console.log(val);
val.push(5);
console.log(val.push(9)); // return length of an array
console.log(val);
console.log(val[1]);
console.log(val.pop()); // return poped value from end
console.log(val.shift()); // return poped value from start
console.log(val.unshift(2)); // return add value from start
console.log(val.splice(2)); // it will remove from index number 2 to end
console.log(val.splice(2, 1)); // it will remove from index number 2 to end (first value is index value,
// last one is number of value you want to remove)

let data = [
  "Mainul",
  { tech: "js", exp: "2" },
  2,
  function () {
    console.log("Hello World");
  },
];
console.log(data);
data[3](); // inside array function call.....

// Loops in array

let loopdata = [5, 7, 8, 9, 4];
for (let n of loopdata) {
  console.log(n);
}
console.log("##############################################");
for (let key in loopdata) {
  console.log(loopdata[key]);
}

// Array Destructuring

let nums = [5, 7, 2, 4];
console.log(nums);
let [a, b, c, d] = nums;
console.log(d);
console.log(b);
console.log(c);

let words = "My Name is Mainul Hasan";
console.log(words);
let spltwrd = words.split(" ");
let [x, y, z, m, n] = spltwrd;
console.log(x, y);
console.log(spltwrd);

let mywrd = "My Name is Mainul Hasan Anik".split(' ');
let [t,r, ...g] = mywrd;
console.log(g);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8];
console.log((numbers1));

// this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]