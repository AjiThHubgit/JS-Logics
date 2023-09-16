function twoSum(nums, target) {
    // Create an empty object to store the indices of elements we've seen
    const seen = {};
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
  
      // If the complement is in the 'seen' object, return its index along with the current index
      if (seen[complement] !== undefined) {
        return [seen[complement], i];
      }
  
      // Otherwise, store the current number's index in the 'seen' object
      seen[currentNum] = i;
    }
  
    // If no solution is found, return an empty array or handle the case as needed
    return [];
  }
  
  // Example usage:
  const nums1 = [2, 7, 11, 15];
  const target1 = 9;
  console.log(twoSum(nums1, target1)); // Output: [0, 1]
  
//   const nums2 = [3, 2, 4];
//   const target2 = 6;
//   console.log(twoSum(nums2, target2)); // Output: [1, 2]
  
//   const nums3 = [3, 3];
//   const target3 = 6;
//   console.log(twoSum(nums3, target3)); // Output: [0, 1]
  