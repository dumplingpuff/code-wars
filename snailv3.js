'use strict';

// My idea for the original snail was along the same idea except
// I didn't use concat and that made my code messy and hard to read.
// Below is a lot better.

function snail(arr) {
  let thesnail;
  while(arr.length) {
    thesnail = thesnail ? thesnail.concat(arr.shift()) : arr.shift();
    for(let i = 0; i < arr.length; i++) {
      thesnail.push(arr[i].pop());
    }
    thesnail = thesnail.concat((arr.pop() || []).reverse());
    for(let i = 0; i < arr.length; i++) {
      thesnail.push(arr[i].shift());
    }
  }
  return thesnail;
}
