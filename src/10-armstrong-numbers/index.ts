/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(num: number): boolean {
    // Convert input number to String
    const numStr: string = num.toString();
    // Find the length of that string
    const numLen: number = num.toString().length;
    // Declare a variable for storing sum of powered numbers
    let sum: number = 0;
    // Loop through all digits
    for (let i = 0; i < numLen; i++) {
      // Reverse string back to Int
      const digit: number = parseInt(numStr[i]);
      // Add the power of nth digit to sum
      sum += Math.pow(digit, numLen);
    }
    // Check if the sum equals the input  number
    return sum === num;
  }
  
  export { validate };