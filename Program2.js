function topKfrequent(nums, k) {
  const frequency = {};//using map to store the frquency of element
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }
  }
  console.log(frequency);
  const arr = [];
  for (const num in frequency) {
    arr.push([Number(num), frequency[num]]);
    console.log(arr);
  }
  arr.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(arr);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  return result;
}
console.log(topKfrequent([1, 1, 1, 2, 2, 3], 2));

console.log(topKfrequent([4, 4, 4, 6, 6, 7, 8, 8, 8, 8],2));
console.log(topKfrequent([5, 5, 5, 5],2));
