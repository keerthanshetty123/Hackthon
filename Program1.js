function longestSubArrayK(arr, k) {
  const map = new Map();
  let prefixSum = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSum == k) {
      maxLength = i + 1;
    }
    if (map.has(prefixSum - k)) {
      const length = map.get(prefixSum - k);
      maxLength = Math.max(maxLength, length);
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }
  return maxLength;
}
console.log(longestSubArrayK([10, 5, 2, 7, 1, -10],15));
console.log(longestSubArrayK( [-5, 8, -14, 2, 4, 12],-5));
console.log(longestSubArrayK([10, -10, 20, 30],5));