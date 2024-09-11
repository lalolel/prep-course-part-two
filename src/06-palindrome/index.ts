/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 * 
 * maybe split, reverse, compare?
 */

function palindrome(str: string) {
    return str === str.split('').reverse().join('');
    }

export { palindrome };
