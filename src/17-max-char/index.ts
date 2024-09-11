/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string | null {
    // Check if string is empty
    if (str.length === 0) {
        return null;
    }
    // Object to store count of each character
    const charCount: { [key: string]: number} = {};
    // Count the occurance of each character in a string
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    // Variables to store character with biggest count
    let maxChar = '';
    let maxCount = 0;
    // Finding character with biggest count
    for(let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }
    return maxChar;

}

export { maxChar };