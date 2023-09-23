let nums = [42, 51, 24, 98, 65, 12];
console.log(nums);
// forEach operator will take one function . that function can do anything with this nums value.
nums.forEach((n) => {
  if (n % 2 == 0) {
    console.log(n);
  }
});
let res = nums.filter((n) => n % 2 === 0);
console.log(nums);
console.log(res);
// filter will filter the value.

let result1 = nums.filter((n) => n % 2 === 0).forEach((n) => console.log(n));

// filter will filter the value.
// from all nums it will give specific value based on condiiton
// from that confition map each value and do some operation.
// after operation print value.

let nums1 = [42, 51, 24, 98, 65, 12];
nums1
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .forEach((n) => console.log(n));

// reduce will give one single value
let r = nums1
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((x, y) => x + y);

console.log(r);
