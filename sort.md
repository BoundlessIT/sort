# Sort Function Exercise

Write a JavaScript conditional statement to sort three numbers. Display result as output of a cli.

```javascript
node sort.js 0 -1 4

Sample numbers : 0, -1, 4
Output : 4, 0, -1
```

## Pseudo-code

```sql
START
  DECLARE num1, num2, num3, temp AS INTEGER

  // Swap num1 and num2 if num2 is greater than num1
  IF num2 > num1 THEN
    temp = num1
    num1 = num2
    num2 = temp
  ENDIF

  // Swap num1 and num3 if num3 is greater than num1
  IF num3 > num1 THEN
    temp = num1
    num1 = num3
    num3 = temp
  ENDIF

  // Swap num2 and num3 if num3 is greater than num2
  IF num3 > num2 THEN
    temp = num2
    num2 = num3
    num3 = temp
  ENDIF

  PRINT "Sorted numbers are: ", num1, ", ", num2, ", ", num3
END
```

## Javascript

```javascript
function sortThreeNumbers(a, b, c) {
  let temp;

  // Swap a and b if b is greater than a
  if (b > a) {
    temp = a;
    a = b;
    b = temp;
  }

  // Swap a and c if c is greater than a
  if (c > a) {
    temp = a;
    a = c;
    c = temp;
  }

  // Swap b and c if c is greater than b
  if (c > b) {
    temp = b;
    b = c;
    c = temp;
  }

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

```
