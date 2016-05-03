'use strict';

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// function check() {
//   return function() {
//
//   };
// }

function uniqueInOrder(thing) {
  let arr;
  if(typeof thing === 'string') {
    arr = thing.split('');
  }
  else {
    arr = thing;
  }
  for(let i = 0; i < arr.length; i++) {
    let duplicate = true;
    while(duplicate) {
      if(arr[i] === arr[i+1]) {
        arr.splice(i+1, 1);
      }
      else {
        duplicate = false;
      }
    }
  }
  return arr;
}


uniqueInOrder([1,1,1,1]);
