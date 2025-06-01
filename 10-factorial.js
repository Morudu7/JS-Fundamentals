 
function factorial (n) {
  // As per the requirement, factorial of NaN is 1.
  // The base case for the recursion: factorial of 0 is 1.
  if (isNaN(n) || n === 0) {
    return 1;
  }

  // If n is negative, this recursive step will lead to n * factorial(n-1),
  // e.g., -1 * factorial(-2), causing a stack overflow.
  // This behavior is consistent with the problem not specifying output for negative numbers
  // beyond what results from parseInt() and the NaN rule.
  // For positive numbers, this is the recursive step.
  return n * factorial(n - 1);
}

// Get the first command-line argument.
const arg = process.argv[2];

// Convert the argument to an integer.
// If arg is undefined (no argument) or not a number string, parseInt(arg) will be NaN.
const numberToFactorial = parseInt(arg);

// Compute and print the factorial.
console.log(factorial(numberToFactorial));

