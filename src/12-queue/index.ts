/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  queue: number[] = [];
  add(n: number) {     // Add provided number into 'items' array
    this.queue.push(n);
  }
  remove() {
    return this.queue.shift();   // Remove and return first element of 'items' array
  }
}

export { Queue };

/*
class Queue {
  // Declare a private property that stores elements in queue
  private items: number[];
  // Create an empty array called items
  constructor() {
    this.items = [];
  }
  // Add provided number into 'items' array
  add(num: number) {
    this.items.push(num);
  }
  // Remove and return first element of 'items' array
  remove() {
    return this.items.shift();
  }
}


*/