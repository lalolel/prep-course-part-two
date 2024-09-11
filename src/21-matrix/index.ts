/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  matrix: number[][];
  constructor(input: string) {
    // Split the input string into rows
    const rows = input.trim().split("\n");
    // Empty matrix to store the numbers
    this.matrix = [];
    // Parse each row and split it into numbers
    for (const row of rows) {
      const numbers = row.split(" ").map(Number);
      this.matrix.push(numbers);
    }
  }
  // Getter method to return rows of the matrix
  get rows() {
    return this.matrix;
  }
  // Getter method to return columns of the matrix
  get columns() {
    const columns: number[][] = [];
    // Iterate over each column index
    for (let i = 0; i < this.matrix[0].length; i++) {
      // Empty array to store current column
      const column: number[] = [];
      // Iterate over each row and extract the element at the current column index
      for (const row of this.matrix) {
        column.push(row[i]);
      }
      columns.push(column);
    }

    return columns;
  }
}

export { Matrix };