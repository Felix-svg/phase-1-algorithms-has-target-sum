// Write your algorithm here
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over the array
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  Need to create a hasTargetSum function that checks if a pair numbers
  in an array add up to some target number. For example, if the array
  is [1,2,3,4,5,6,7] and the target is 9, I know that 2 and 7 add up to 9,
  so the function should should return true. If I have the same array and
  the target is 14, no two numbers in the array add up to 14, so I the function
  should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 20, 5, 15], 30));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 7, 10], 21));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7], 9));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7], 14));
}

module.exports = hasTargetSum;
