/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
  const words = sen.replace("&!!", "").split(" ");
  let word = words[0];

  for (let i = 1; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word;
}

export { longestWord };
