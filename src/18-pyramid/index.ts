/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    // Loop from 1 to input number inclusive to draw each line of pyramid
    for (let i = 1; i <= n; i++) {
        // Calculate number of spaces and # for each row
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(2 * i - 1);
        // Combine spaces and hashes to draw a row
        const row = spaces + hashes + spaces;
        // Print the row
        console.log(row);
    }
}

export { pyramid };