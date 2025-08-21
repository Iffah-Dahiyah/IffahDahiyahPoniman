// Modify the code below:

// hmmm this answer was a solution from AI, but I don't understand what's going on, even when it attempts to break down the solution: 

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

function findLowestThree(prices) {
  // Step 1: sort numbers from smallest → largest
  let sorted = prices.sort(function(a, b) {
    return a - b;  // compare two numbers, but why need to minus?
  });

  // Step 2: take the first 3 elements
  let lowestThree = sorted.slice(0, 3);

  // Step 3: return the result, what is return?
  return lowestThree;
}

// Use the function
let result = findLowestThree(amdPrices);
console.log("The three lowest prices are " + result.join(", "));