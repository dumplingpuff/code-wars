'use strict';

// Test.assertSimilar(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);

// In given array make a new array stating how many numbers a number is greater
// to the right of the array.
// The method requires double iteration.
// you want to iterate through each number.
// at each number you want to iterate from that point through the array again.

// you can use a map loop to go through each one and on each number foreach on
// remaining numbers.

function liggleGuy (arr) {
  let na = arr.map((n, i) => {
    let count = 0;
    arr.slice(i).forEach((x, i) =>{
      if (n > x) {
        count++;
      }
    });
    return count;
  });
  console.log(na);
}

liggleGuy([1,2,3,4,5]);
