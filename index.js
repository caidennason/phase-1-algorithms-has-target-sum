function hasTargetSum(array, target) {
  for (i = 0; i <= array.length; i++){
    for (j = i + 1; j <= array.length; j++){
      if (array[i] + array[j] === target){
        return true
        } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  for (i = 0; i <= array.length; i++){
    if (array[i] + array[i] === target){
    return true
    } else {
      return false
    }
  }
*/

/* 
  go through each number in the array
  find if any number plus the other numbers is equal to target
  hop over each number and see if it equals the target
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;
