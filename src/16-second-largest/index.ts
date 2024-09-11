/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number | null {
    // Make sure array has at least two elements
    if (array.length < 2 || new Set(array).size === 1) {
        return null
    }
    // Sort the array in descending order and return second value
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray[1];

}

export { secondLargest };