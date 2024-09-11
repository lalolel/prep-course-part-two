/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */
const evenDigits = [0, 2, 4, 6, 8];

function isEven(n: number): boolean {
  const nAsString = n.toString();
  //splits the number at the dot into an array of 2 parts 
  const parts = nAsString.split(".");
// take the first number in the array
  const wholeNumAsString = parts[0];
  // take last digit
  const lastDigit = Number(wholeNumAsString[wholeNumAsString.length - 1]);
  // compare to even numbers
  return evenDigits.includes(lastDigit);
 
 
 

}

export { isEven };
/*
other versions: 
Using bitwise & operator to see if least significant bit is 0: (0 - even number(true), 1 - odd number(false))

function isEven(n: number) {
        return (n & 1) === 0;;
    };

function isEven(n: number) {
        return !(n & 1 << 0);
    };




*/