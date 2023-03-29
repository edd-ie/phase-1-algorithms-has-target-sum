function hasTargetSum(array, target) {
  // Write your algorithm here
  let hold = new Map();
  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];
    if (hold.has(difference)) {
      console.log([array[hold.get(difference)], array[i]]);
      return true;
    }
    hold.set(array[i],i)
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) time complexity
*/

/* 
  Add your pseudocode here
  create a hash map
  loop through elements of the array
    calculate difference between target and element
    if the hash map has the difference
      return the true
    else set the current element and index to map
  if loop completes with nothing
    return false
*/

/*
  Add written explanation of your solution here
  Map() store a value with its reference 
  looping through each element we note the difference between it and the target
  if our map has the difference, we get the value and its index and return true
  else we map the current element and its index to them map using .set()        
  repeat if unsuccessful return false
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
