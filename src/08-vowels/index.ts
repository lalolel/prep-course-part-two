/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 *
 *  ? : if else
 * regex gan jau
 */

function vowels(s: string) {
  const vowelsArr = s.match(/[aeiou]/gi);
  return vowelsArr === null ? 0 : vowelsArr.length;
}

export { vowels };
