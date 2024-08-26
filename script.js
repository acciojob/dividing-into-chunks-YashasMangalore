const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];  // This will hold the final subarrays
  let currentSubarray = [];  // Temporary subarray
  let currentSum = 0;  // Sum of elements in the current subarray

  for (const num of arr) {
    if (currentSum + num > n) {
      // If adding the current number exceeds the max sum,
      // push the current subarray to the result list
      result.push(currentSubarray);
      // Start a new subarray with the current number
      currentSubarray = [num];
      currentSum = num;
    } else {
      // Otherwise, just add the number to the current subarray
      currentSubarray.push(num);
      currentSum += num;
    }
  }

  // Push the last subarray if it has elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
