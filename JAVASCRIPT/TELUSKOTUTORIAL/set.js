let nums = new Set("bookkeeper");
nums.add(3);
nums.add(3.5);
nums.add("Navin");
console.log(nums);

nums.forEach((value) => {
  console.log(value);
});

console.log(nums.has(3));
console.log(nums.has('p'));