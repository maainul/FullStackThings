// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598

//www.zacfukuda.com/blog/pagination-algorithm
// My personal implementation returns an object with current, prev, next:

function paginate({ current, max }) {
  if (!current || !max) return null;

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1,
    items = [1];

  if (current === 1 && max === 1) return { current, prev, next, items };
  if (current > 4) items.push("…");

  let r = 2,
    r1 = current - r,
    r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

  if (r2 + 1 < max) items.push("…");
  if (r2 < max) items.push(max);

  return { current, prev, next, items };
}
/* Test */
for (let max = 1; max < 10; max += 2) {
  console.log(`max: ${max}`);
  for (let current = 1; current <= max; current++) {
    console.log(`[c, m] : ${current}, ${max}`);
    let pagination = paginate({ current, max });
    console.log(`  c:${current}`, pagination.items);
  }
}

/*
Output:
max: 1
  c:1 [1]
max: 3
  c:1 [1, 2, 3]
  c:2 [1, 2, 3]
  c:3 [1, 2, 3]
max: 5
  c:1 [1, 2, 3, '…', 5]
  c:2 [1, 2, 3, 4, 5]
  c:3 [1, 2, 3, 4, 5]
  c:4 [1, 2, 3, 4, 5]
  c:5 [1, '…', 3, 4, 5]
max: 7
  c:1 [1, 2, 3, '…', 7]
  c:2 [1, 2, 3, 4, '…', 7]
  c:3 [1, 2, 3, 4, 5, '…', 7]
  c:4 [1, 2, 3, 4, 5, 6, 7]
  c:5 [1, '…', 3, 4, 5, 6, 7]
  c:6 [1, '…', 4, 5, 6, 7]
  c:7 [1, '…', 5, 6, 7]
max: 9
  c:1 [1, 2, 3, '…', 9]
  c:2 [1, 2, 3, 4, '…', 9]
  c:3 [1, 2, 3, 4, 5, '…', 9]
  c:4 [1, 2, 3, 4, 5, 6, '…', 9]
  c:5 [1, '…', 3, 4, 5, 6, 7, '…', 9]
  c:6 [1, '…', 4, 5, 6, 7, 8, 9]
  c:7 [1, '…', 5, 6, 7, 8, 9]
  c:8 [1, '…', 6, 7, 8, 9]
  c:9 [1, '…', 7, 8, 9]
*/
