/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    // Transform  to lowercase trim and split the input string into array of words
    const words = str.toLowerCase().trim().split(/\s+/);
    // Create an object to store count of each word
    const wordCount: { [key: string]: number } = {};
    for (const word of words) {
      // Filter out properties that exist on object prototype
      if (!Object.prototype.hasOwnProperty.call(wordCount, word)) {
        // Increment the current word in wordcount object
          wordCount[word] = 1;
      } else {
        wordCount[word] ++;
      }
    }
    return wordCount;
  } 
}

export { Words };