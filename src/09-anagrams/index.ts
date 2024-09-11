/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 * 
 * strip, sort, compare?
 */

 
 let res = "";
 

 function anagrams(stringA: string, stringB: string): boolean {
  // Remove whitespace and punctuation, and convert input strings to lowercase
  let str1 = stringA.replace(/[\W_]/g, "").toLowerCase();
  let str2 = stringB.replace(/[\W_]/g, "").toLowerCase();
  // Check if both strings are the same length
  if (str1.length !== str2.length) {
    return false;
  }
  // If strings are the same length we sort them and check if they are equal and return boolean
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
}

export { anagrams };