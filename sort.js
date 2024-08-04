function sortThreeNumbers(a, b, c) {
  let temp;


  console.log(`${a}, ${b}, ${c}`);
}

// Get command-line arguments
const args = process.argv.slice(2);

// Ensure there are exactly 3 arguments
if (args.length !== 3) {
  console.error('Please provide exactly three numbers.');
  process.exit(1);
}

// Convert string inputs to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const num3 = parseFloat(args[2]);

// Check if all inputs are valid numbers
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.error('Please provide valid numbers.');
  process.exit(1);
}

// Call the function to sort the numbers
sortThreeNumbers(num1, num2, num3);
