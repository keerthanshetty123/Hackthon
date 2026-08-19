function medianofarray(a, b) {
  const merge = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      merge.push(a[i]);
      i++;
    } else {
      merge.push(b[j]);
      j++;
    }
  }
  console.log(merge);
  while (i < a.length) {
    merge.push(a[i]);
    i++;
  }
  while (j < b.length) {
    merge.push(b[j]);
    j++;
  }
  console.log(merge);
  const n = merge.length;
  if (n % 2 !== 0) {
    return merge[Math.floor(n / 2)];
  }
  const mid1 = merge[n / 2 - 1];
  const mid2 = merge[n / 2];
  return (mid1 + mid2) / 2;
}

console.log(medianofarray( [3, 5, 6, 12, 15], [3, 4, 6, 10, 10, 12]));
console.log(medianofarray([2, 3, 5, 8],[10, 12, 14, 16, 18, 20]));
console.log(medianofarray([],[2, 4, 5, 6]));