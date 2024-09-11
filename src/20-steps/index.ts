/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    // Iterate from 1 to n to build each row of steps
    for (let i = 1; i <= n; i++) {
        // Create string with # follower by spaces
        const step = '#'.repeat(i) + ' '.repeat(n - i);
        console.log(step);
    }
}

export { steps };