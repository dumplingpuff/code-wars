'use strict';
// You have to validate input:
//
// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
//
// Code Examples
//
//     prefill(3,1) --> [1,1,1]
//
//     prefill(2,"abc") --> ['abc','abc']
//
//     prefill("1", 1) --> [1]
//
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
//
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"


function prefill(n, v) {
  let arr = [];
  if(Number(n) < 0 || isNaN(parseInt(n))  || n % 1 !== 0) {
    throw new TypeError(`${n} is invalid`);
  }
  else if(n == 0) {
    console.log([]);
    return [];
  }
  else {
    while(arr.length < n) {
      arr.push(v);
    }
    return arr;
  }
}


prefill(13, null);
// prefill(11, prefill(2, 'dash'));
