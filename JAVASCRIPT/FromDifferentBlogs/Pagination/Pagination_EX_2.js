function pagination(current, last, delta = 2) {
  if (last === 1) return [1];

  const left = current - delta,
    right = current + delta + 1,
    range = [];

  if (last > 1 && current !== 1) {
    range.push("<");
  }

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      if (i === left && i > 2) {
        range.push("...");
      }

      if (i === current) {
        range.push("*" + i + "*");
      } else {
        range.push(i);
      }

      if (i === right - 1 && i < last - 1) {
        range.push("...");
      }
    }
  }

  if (last > 1 && current !== last) {
    range.push(">");
  }

  return range;
}

for (let i = 1, l = 20; i <= l; i++)
  console.log(`Selected page ${i}:`, pagination(i, l));
