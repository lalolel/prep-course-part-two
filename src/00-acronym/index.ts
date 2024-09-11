/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

import { isAccessor, walkUpBindingElementsAndPatterns } from "typescript";
import { Words } from "../19-word-count";

function parse(input: string) {
  const cleanInput = input.replace("-", " ").replace(/[^A-Z\s+]/gi, "");
  const words = cleanInput.split(" ");
  let res = "";
  words.forEach((word) => (res = word ? res + word[0] : res));
  return res.toUpperCase();
}

export { parse };
