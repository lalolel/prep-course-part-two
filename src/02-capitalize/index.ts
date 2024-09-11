/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 *
 *
 * 1. iegūstam vārdus ar split () - rexzutlātā masīvs
 * 2. ejam cauri, iegūstam pirmo burtu ar [0]
 * 3. toUpperCase
 * 4. savienot atpakaļ ar atlikušo vārdu
 * 5. iegūtos vārdus ielikt atpakaļ teikumā
 */

function capitalize(sentence: string) {
  const words = sentence.split(" ");
  const upperWords = words.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );
  return upperWords.join(" ");
}

export { capitalize };
