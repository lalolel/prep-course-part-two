/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
  let reversed = '';
  // Looping through input string in reverse order
  for (let i = str.length -1 ; i >= 0; i-- ) {
      // Concatenate each character to the reversed string
      reversed += str[i];
  }
  return reversed;
}

export { reverse };