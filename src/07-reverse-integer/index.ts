/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
  // Convert int to string
  const numStr = int.toString();
  // Now we can reverse the string
  const reversedStr = numStr.split("").reverse().join("");
  // And turn reversed string back to Int
  const reversedInt = parseInt(reversedStr);
  // This will return negative Int if Int is smaller than 0
  return int < 0 ? -reversedInt : reversedInt;
}

export { reverse };