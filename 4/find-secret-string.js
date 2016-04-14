'use strict';

// find the secret string
// a collection of triplet letters are given.
// use letters to find string
// each letter occurs somewhat before the next letter in triplet.
// all letters in string are not duplicates.
// you know you will receive all the letters.

// Abstraction steps:
// work backwards from last points
// insert both current and prev char into string or array.
// if current already exists in string, find the point.
    // insert prev char before it.
// if prev exists, save the point and insert current before it.
// if both exists, find current point.  Remove prev old position and insert
  // it before current point.

// Do this for the last two columns only.
// Print string once sequence is over.
// this sequence has a big O(n)



// secret1 = "whatisup"
// triplets1 = [
//   ['t','u','p'],
//   ['w','h','i'],
//   ['t','s','u'],
//   ['a','t','s'],
//   ['h','a','p'],
//   ['t','i','s'],
//   ['w','h','s']
// ]
//
